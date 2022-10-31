import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
before: ` `.trimStart(),
header: '⃟⃟☰⃟⃟ᭁ═━┈━┈༓ *%category* ',
body: `┆➨ %cmd %isPremium %islimit`,
footer: `⃟⃟⃟⃟࿑⃟⃟⃟࿐═┈༓᭄༤\n`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'game': 'Game',
'rpg': 'RPG Games',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'': 'No Category',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} MAIN ${htka}`,
rows: [
{title: `⚡ ${emot} SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
{title: `💌 ${emot} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
{title: `📔 ${emot} SCRIPT BOT`, rowId: ".sc", description: `Source Code ${namebot}`},
]
},{
title: `${htki} SUPPORT ${htka}`,
rows: [
{title: `🔖 ${emot} SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
{title: `🌟 ${emot} BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
{title: `💹 ${emot} DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
]
},{
title: `${htki} MENU ${htka}`,
rows: [
{title: `${emot} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
{title: `${emot} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
{title: `${emot} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
{title: `${emot} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
{title: `${emot} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
{title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
{title: `${emot} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
{title: `${emot} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
{title: `${emot} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
{title: `${emot} Premium`, rowId: ".? premium", description: "Only premium Users"},
{title: `${emot} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
{title: `${emot} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
{title: `${emot} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
{title: `${emot} Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
{title: `${emot} Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
{title: `${emot} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
{title: `${emot} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
{title: `${emot} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
{title: `${emot} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
{title: `${emot} Group`, rowId: ".? group", description: "Only Groups"},
{title: `${emot} Admin`, rowId: ".? admin", description: "Only Admin Group"},
{title: `${emot} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
{title: `${emot} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
{title: `${emot} Info`, rowId: ".? info", description: "Info info BOT"},
{title: `${emot} Owner`, rowId: ".? owner", description: "Owner Only!"},
{title: `\n${emot} No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
] },
]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `*${ucapan()} @${m.sender.split`@`[0]}*
☰⃟⃟ᭁ═━┈━┈༓
┯┩${psan}
┡────────────┈ ⳹
┠━☰⃟⃟ᭁ「 *U s e rI n f o 克* 」
┋↬✗• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
║↬✗• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
╏↬✗• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╎↬✗• *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
╅╌┉┈┈╳
╭╼╼╼╼╼╼╼╼╺╴╴╳
┊ 「 *S t a t u sI n f o 比* 」
┊⧠ *ᴜᴘᴛɪᴍᴇ:* ${mpt}
┊⧠ *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
┊⧠ *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
┊⧠ *ʟɪᴍɪᴛ:* ${usrs.limit}
┊⧠ *ʟᴇᴠᴇʟ:* ${usrs.level}
┊⧠ *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
┗––––––––––––––––––✥
┊↬✗• *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
`
const listMessage = {
text: tek,
footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
mentions: await conn.parseMention(tek),
title: `${htki} *LIST MENU* ${htka}`,
buttonText: `CLICK HERE ⎙`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

// Kontol Menu

let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${snd}.mp3`
let imgrr = `https://telegra.ph/file/274678ee5464fae91381d.jpg`

//------------------ DOCUMENT
// Anggap Ajh Di Sini ga ada apa²
const _0x18a508=_0x34ee;(function(_0x25f2e5,_0x51d755){const _0x43bce0=_0x34ee,_0x748310=_0x25f2e5();while(!![]){try{const _0x25e9e8=parseInt(_0x43bce0(0x1e8))/0x1*(-parseInt(_0x43bce0(0x1dd))/0x2)+-parseInt(_0x43bce0(0x1e6))/0x3*(-parseInt(_0x43bce0(0x1f1))/0x4)+parseInt(_0x43bce0(0x1ea))/0x5+parseInt(_0x43bce0(0x1e4))/0x6*(-parseInt(_0x43bce0(0x1e3))/0x7)+parseInt(_0x43bce0(0x1ee))/0x8+parseInt(_0x43bce0(0x1e0))/0x9+parseInt(_0x43bce0(0x1f9))/0xa*(parseInt(_0x43bce0(0x1fd))/0xb);if(_0x25e9e8===_0x51d755)break;else _0x748310['push'](_0x748310['shift']());}catch(_0x349e9b){_0x748310['push'](_0x748310['shift']());}}}(_0x490e,0x5221f),console[_0x18a508(0x1eb)]('🐾\x20Starting...'));import _0x23eb17 from'yargs';import _0x2f1793 from'cfonts';import{fileURLToPath}from'url';import{join,dirname}from'path';import{createRequire}from'module';import{createInterface}from'readline';import{setupMaster,fork}from'cluster';import{watchFile,unwatchFile}from'fs';function _0x34ee(_0x466418,_0x1bfdeb){const _0x490efc=_0x490e();return _0x34ee=function(_0x34ee1b,_0x313a81){_0x34ee1b=_0x34ee1b-0x1d9;let _0x2bc4f3=_0x490efc[_0x34ee1b];return _0x2bc4f3;},_0x34ee(_0x466418,_0x1bfdeb);}function _0x490e(){const _0xf1cb42=['listenerCount','reset','send','slice','1060YmuAbU','apply','center','main.js','66539IuseMp','error','exitProcess','uptime','parse','green','845438KbKZNn','chrome','./package.json','2248749EAmCEM','blue','[✅RECEIVED]','21nuMtBq','1148244hXTXKx','stdout','11730TajAQN','stdin','1EEyRnU','message','455750GPnfGr','log','join','line','1870008vAyusO','argv','test','120yPnKol','emit','console','url'];_0x490e=function(){return _0xf1cb42;};return _0x490e();}const {say}=_0x2f1793,rl=createInterface(process[_0x18a508(0x1e7)],process[_0x18a508(0x1e5)]),__dirname=dirname(fileURLToPath(import.meta[_0x18a508(0x1f4)])),require=createRequire(__dirname),{name,author}=require(join(__dirname,_0x18a508(0x1df)));say('Bot\x20Whatsapp\x20MD',{'font':_0x18a508(0x1de),'align':_0x18a508(0x1fb),'gradient':['blue',_0x18a508(0x1dc)]}),say('\x27WH-MODS-BOT-V1\x27\x20By\x20WH\x20MODS\x20DEV',{'font':_0x18a508(0x1f3),'align':_0x18a508(0x1fb),'gradient':[_0x18a508(0x1e1),_0x18a508(0x1dc)]});var isRunning=![];function start(_0x82f090){const _0x24e4ff=_0x18a508;if(isRunning)return;isRunning=!![];let _0x4ff78d=[join(__dirname,_0x82f090),...process[_0x24e4ff(0x1ef)][_0x24e4ff(0x1f8)](0x2)];say([process['argv'][0x0],..._0x4ff78d][_0x24e4ff(0x1ec)]('\x20'),{'font':_0x24e4ff(0x1f3),'align':'center','gradient':['red','magenta']}),setupMaster({'exec':_0x4ff78d[0x0],'args':_0x4ff78d['slice'](0x1)});let _0x13fc33=fork();_0x13fc33['on'](_0x24e4ff(0x1e9),_0x954029=>{const _0x2f87b1=_0x24e4ff;console[_0x2f87b1(0x1eb)](_0x2f87b1(0x1e2),_0x954029);switch(_0x954029){case _0x2f87b1(0x1f6):_0x13fc33['process']['kill'](),isRunning=![],start[_0x2f87b1(0x1fa)](this,arguments);break;case _0x2f87b1(0x1da):_0x13fc33[_0x2f87b1(0x1f7)](process[_0x2f87b1(0x1da)]());break;}}),_0x13fc33['on']('exit',(_0x2c854f,_0x56d933)=>{const _0x5ad768=_0x24e4ff;isRunning=![],console[_0x5ad768(0x1fe)]('[❗]Exited\x20with\x20code:',_0x56d933);if(_0x56d933!==0x0)return start(_0x82f090);watchFile(_0x4ff78d[0x0],()=>{unwatchFile(_0x4ff78d[0x0]),start(_0x82f090);});});let _0x5e0e4c=new Object(_0x23eb17(process[_0x24e4ff(0x1ef)]['slice'](0x2))[_0x24e4ff(0x1d9)](![])[_0x24e4ff(0x1db)]());if(!_0x5e0e4c[_0x24e4ff(0x1f0)]){if(!rl[_0x24e4ff(0x1f5)]())rl['on'](_0x24e4ff(0x1ed),_0x48847c=>{const _0x2502af=_0x24e4ff;_0x13fc33[_0x2502af(0x1f2)](_0x2502af(0x1e9),_0x48847c['trim']());});}}start(_0x18a508(0x1fc));
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(tesm|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}