import fetch from 'node-fetch'  
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: `${wm}`, thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}ππππππππ π πππππππΏπ πΌπ πππππΌππ πΏπ ππΌ πππππππΌ πππ ππππππ πππΎππΌππΌπ πΎπππ ππΌππππΌ\n\nππΌπ πππ ππππππ πππ ππΌππ ππ πππππΎπ πΌπ πΌ ππΌπππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `${fg}ππ ππ πππΎπππππ πΌ ππΌ πππππππΌ, πΏππ½π πΏπ ππππΌπ ππ ππππ πππππ\n\nπππ ππππππ ππΌπ πππ πππππΏ, ππππ ππππ π½π ππ ππππ πππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}πππππΏ πππππ ππ ππππΏπ πππ ππΌππππΌ\n\nπππ ππππππππ πΎπΌππππ π½π πΌ ππΌπππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}ππ ππ ππππΏπ πππ ππ ππΌππππΌ πΉ\n\nππππ ππ πππ πΎπΌππππ π½π πΌ πΎπππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `ππ ππππΏππ πππΎππΌππΌπ πΌ *${tu}* ππ πππππππ ππ ππΌ πΏππΎππΌππΌπΏπ, πΏππΎππΌππΌππ ππΌππΌ πππ πΏπππΌ ππ ππ πΌπΎππππΌ π ππ πππΎππΌππΌ\n\nπππ πΎπΌππππ πΏππΎππππ ππ πππ½ππΏπ ππΌπ πΏππΎππΌπππΏ, πΏππΎππΌππ ππππ *${tu}* ππ ππΌπ ππ πππ πΌπΎπΎπππ ππ πππππΎπ πππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu] }})	
	
}else{
global.db.data.users[user].pasangan = ""
return await conn.sendButton(m.chat, `πΏ ππΌπππππΌπ½πππππππ *${yo}* ππ ππΌ ππππΌπΏπ π« ππ ππππΌπ ππ πππΌ ππππΌπΎπππ πΎππππππ *${tu}*\nππ πππππ ππππππ, πΌππ ππππππ πππΎππΌπ πΎπππΌπ πππ ππΌπΎππ π\n\nπππππ πΌππ ππ πππΌππππ πππ ππππ ππ π½π πΌ πΎπππππ, πΏππ'π π½π πΏπππΎππππΌπππΏ`, `*${tu} π ${yo}*\n` + wm, img5, [
['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(rechazar|cancelar|decline)$/i
handler.group = true
export default handler
