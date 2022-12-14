import fetch from 'node-fetch'
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body:  `${wm}`, thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
    
if (chat.antiTiktok && isAntiLinkTik) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ ππππππ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ ππππππ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiYoutube && isAntiLinkYt) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ πππ πππ½π ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ πππ πππ½π ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antiyoutube']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiTelegram && isAntiLinkTel) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ πππππππΌπ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ πππππππΌπ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antitelegram']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiFacebook && isAntiLinkFb) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ ππΌπΎππ½πππ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ ππΌπΎππ½πππ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antifacebook']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiInstagram && isAntiLinkIg) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ πππππΌπππΌπ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ πππππΌπππΌπ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antiinstagram']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiTwitter && isAntiLinkTw) {
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ πππππππ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ πππππππ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, img5, [['β πΏπππΌπΎππππΌπ', '/off antitwitter']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`, wm, img5, [['β πΌπΎππππΌπ', '/on restrict']], m, dos.getRandom())
}
return !0
}

