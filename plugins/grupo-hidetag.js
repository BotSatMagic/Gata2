import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import * as fs from 'fs'
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
try {  
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text || m.sender
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: m, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

} catch {  

/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/  
    
let users = participants.map(u => conn.decodeJid(u.id))
let quoted = m.quoted ? m.quoted : m
let mime = (quoted.msg || quoted).mimetype || ''
let isMedia = /image|video|sticker|audio/.test(mime)
let more = String.fromCharCode(8206)
let masss = more.repeat(850)
let htextos = `${text ? text : "*Hola :D*"}`
if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { image: mediax, mentions: users, caption: htextos, mentions: users }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { audio: mediax, mentions: users, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, {sticker: mediax, mentions: users}, { quoted: m })
} else {
await conn.relayMessage(m.chat, {extendedTextMessage:{text: `${masss}\n${htextos}\n`, ...{ contextInfo: { mentionedJid: users, externalAdReply: { thumbnail: imagen1, sourceUrl: 'Bot' }}}}}, {})
}}}
handler.command = /^(hidetag|notificar|notify)$/i
handler.group = true
handler.admin = true
export default handler

/*import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat,
generateWAMessageFromContent(m.chat, {
[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
text: c || ''
}
}, {
quoted: m,
userJid: conn.user.id
}),
text || q.text, conn.user.jid, { mentions: users }
)
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(opengumuman|oannounce|ohiddentag|hidetag|notificar|noti|notify|notifi)$/i
handler.group = true
handler.admin = true 
export default handler
*/