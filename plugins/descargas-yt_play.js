import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: `${wm}`, thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${fg}ππ ππ πππΏπ πππΎπππππΌπ ππ πΌππΏππ/πππΏππ. πππππππ πΎππ ππππ ππππ½ππ π ππππππ\n\nπππ πΌππΏππ/πππΏππ πΎππππΏ πππ π½π πππππΏ. πππ πΌππππππ ππΌππ ππ πππππ`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*

ΰ¦ ππππππ | πππππ
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΎππππΎπππ | πΏπππΎπππππππ
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ½πππΎπΌπΏπ | πππ½ππππππΏ
Β» ${publishedTime}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΌπΎπππ | πΏπππΌππππ
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππππΌπ | πππππ
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ
Β» ${url}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`, thumbnail, [['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' π‘ π§ππ£π’π¦ ππ πππ¦πππ₯πππ¦ ' + fin,
rows: [
{title: "π  π π¨ π π π’ (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’ (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’   π π’ π", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’   π π’ π", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' π ππ¨π¦π€π¨πππ ππ©ππ‘π­πππ ' + fin,
rows: [
{title: "π  π  π π¦   π₯ π π¦ π¨ π π§ π π π’ π¦", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*πππππΌ πππ ππΌ ππΌπΎππ πΎππ  ${text}*`,
  footer: global.wm,
  title: `${htki} *β»οΈ πΏπππΎπΌπππΌπ* ${htka}`,
  buttonText: `π πππππππ π`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${fg}πππππππ πΏπ πππππ\nπππ πΌππΌππ`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
