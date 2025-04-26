import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['584146277368', 'Barboza OFC',true],
  ['50577688033', 'Goku',true],
  ['18303195196', 'sisked',true],
  ['50557865603', 'Willzek',true],
  ['5212441357601', 'Emma (Violets Version)',true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

gᥣ᥆ᑲᥲᥣ.⍴ᥲᥴkᥒᥲmᥱ = `[ 🌪️s𝗍іᥴkᥱr mᥲkᥱr`
gᥣ᥆ᑲᥲᥣ.ᥲᥙ𝗍һ᥆r = 'ᥴᥲsᥱᑲᥲᥴһᥱ ᑲ᥆𝗍 ᥲі 🌪️]'
gᥣ᥆ᑲᥲᥣ.s𝗍іᥴk⍴ᥲᥴk = '©ᑲ᥆𝗍 ᥴᥲsᥱᑲᥲᥴһᥱ'
gᥣ᥆ᑲᥲᥣ.s𝗍іᥴkᥲᥙ𝗍һ = 'ᑲᥡ һᥱᥴ𝗍᥆r'
gᥣ᥆ᑲᥲᥣ.ᥕm = 'һᥱᥴ𝗍᥆r🌪️'
gᥣ᥆ᑲᥲᥣ.ძᥱ᥎ = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ һᥱᥴ𝗍᥆r'
gᥣ᥆ᑲᥲᥣ.ᥕᥲі𝗍 = '🌪️ *ᥲɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ, sᴏʏ ʟᴇɴᴛ𝙾... ฅ^•ﻌ•^ฅ\ᥒ\ᥒ> ᑲ᥆𝗍  ᥴᥲsᥱᑲᥲᥴһᥱ🌪️*'
gᥣ᥆ᑲᥲᥣ.ᑲ᥆𝗍ᥒᥲmᥱ = '[ 🌪️ ᑲ᥆𝗍 ᥴᥲsᥱᑲᥲᥴһᥱ ]'
gᥣ᥆ᑲᥲᥣ.𝗍ᥱ᥊𝗍ᑲ᥆𝗍 = `⍴᥆ᥕᥱrᥱძ ᑲᥡ ᑲ᥆𝗍 ᥴᥲsᥱᑲᥲᥴһᥱ🌪️`
gᥣ᥆ᑲᥲᥣ.ძᥱ᥎ = '© ⍴᥆ᥕᥱrᥱძ һéᥴ𝗍᥆r mძ'
gᥣ᥆ᑲᥲᥣ.ᥣіs𝗍᥆ = '*ᥲ𝗊ᥙі 𝗍іᥱᥒᥱ ฅ^•ﻌ•^ฅ*'
gᥣ᥆ᑲᥲᥣ.ᥒᥲmᥱᥴһᥲᥒᥒᥱᥣ = 'ᑲ᥆𝗍 ᥴᥲsᥱᑲᥲᥴһᥱ🌪️'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://chat.whatsapp.com/CBuLXuVZcg9FEfCSHiY6b0'
global.canal = 'https://whatsapp.com/channel/0029Vaua0ZD3gvWjQaIpSy18'
global.insta = 'https://www.insta.com/https://www.insta.com/sebastian_barboza13'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.ch = {
ch1: '120363375378707428@newsletter',
ch2: '120363414007802886@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.jadi = 'BarbozaJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//Apis

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDiosV2',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
} 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})