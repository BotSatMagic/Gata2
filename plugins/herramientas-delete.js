import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: `${wm}`, thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `πππππππΏπ πΌπ πππππΌππ πΏπ πΌππππππ ππΌππΌ πππΏππ πππππππΌπ ππ πππππΌππ\n\nπππππ ππ πππππππ'π πππππΌππ ππ πππ πΎπΌπ πΏπππππ πππ πππππΌππ`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^eliminar|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
