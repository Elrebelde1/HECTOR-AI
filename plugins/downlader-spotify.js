import fetch from "node-fetch";

// URLs de las APIs en Base64
const SPOTIFY_SEARCH_API = "aHR0cHM6Ly9hcGkudnJlZGVuLndlYi5pZC9hcGkvc3BvdGlmeXNlYXJjaD9xdWVyeT0=";
const SPOTIFY_DOWNLOAD_API = "aHR0cHM6Ly9hcGkudnJlZGVuLndlYi5pZC9hcGkvc3BvdGlmeT91cmw9";

// Función para decodificar Base64
const decodeBase64 = (encoded) => Buffer.from(encoded, "base64").toString("utf-8");

// Función para manejar reintentos de solicitudes
const fetchWithRetries = async (url, maxRetries = 2) => {
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      const data = await response.json();
      if (data && data.status === 200 && data.result) {
        return data.result;
      }
    } catch (error) {
      console.error(`Error en el intento ${attempt + 1}:`, error.message);
    }
    attempt++;
  }
  throw new Error("No se pudo obtener una respuesta válida después de varios intentos.");
};

// Handler principal
let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) {
    return conn.sendMessage(m.chat, {
      text: `🎧 *Spotify Search *\n\n❗ *Ingresa el nombre de la canción o artista que deseas buscar.*\n\n*Ejemplo:* ${usedPrefix}spotify Shape of You`,
    });
  }

  // Notificar que se está buscando la música
  await conn.sendMessage(m.chat, {
    text: `🎶 *Buscando en Spotify...*\n⌛ Esto puede tardar unos segundos.`,
  });

  try {
    // Decodificar y realizar búsqueda en Spotify
    const searchUrl = `${decodeBase64(SPOTIFY_SEARCH_API)}${encodeURIComponent(text)}`;
    const searchResults = await fetchWithRetries(searchUrl);

    if (!searchResults || !searchResults.length) {
      throw new Error("No se encontraron resultados en Spotify.");
    }

    // Seleccionar el primer resultado
    const track = searchResults[0];
    const { title, url: trackUrl, popularity } = track;

    if (!trackUrl) {
      throw new Error("No se pudo obtener el enlace del track.");
    }

    // Decodificar y descargar la canción utilizando la API de descarga
    const downloadUrl = `${decodeBase64(SPOTIFY_DOWNLOAD_API)}${encodeURIComponent(trackUrl)}`;
    const downloadData = await fetchWithRetries(downloadUrl);

    const { title: downloadTitle, artists, cover, music } = downloadData;

    if (!music) {
      throw new Error("No se pudo obtener la URL de descarga.");
    }

    // Mensaje estilizado para Spotify
    const description = `🎧 *Casebache Bot AI: Tu música en un clic*\n\n🎵 *Título:* ${title || "No disponible"}\n🎤 *Artista:* ${artists || "Desconocido"}\n⭐ *Popularidad:* ${popularity || "No disponible"}\n🔗 *Spotify Link:* ${trackUrl}\n\n🟢 *Descargando tu canción...*`;

    // Enviar mensaje con la información del track
    await conn.sendMessage(m.chat, { text: description });

    // Enviar el archivo como audio
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: music },
        mimetype: "audio/mpeg",
        fileName: `${downloadTitle}.mp3`,
        caption: "🎶 Música descargada gracias a BarbozaBot-Ai",
        contextInfo: {
          externalAdReply: {
            title: title || "Spotify Music",
            body: artists || "Powered by BarbozaBot-Ai",
            thumbnailUrl: cover,
            mediaUrl: trackUrl,
          },
        },
      },
      { quoted: m }
    );
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    await conn.sendMessage(m.chat, {
      text: `❌ *Ocurrió un error al intentar procesar tu solicitud:*\n${error.message || "Error desconocido"}`,
    });
  }
};

handler.command = /^spotify$/i;

export default handler;