import fetch from 'node-fetch'
let handler = async (m, { conn, participants, groupMetadata }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: `${wm}`, thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const { reaction, antifake, antiTwitter, antiInstagram, antiFacebook, antiTelegram, antiYoutube, antiTiktok, isBanned, autolevelup, antiver, antitoxic, temporal, restrict, stickers, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]

let text = 
`β­β[ πΎππππππππΌπΎπππ ]ββ¬£
β
βγ» ππππΎπππ ${welcome ? 'β' : 'β'}
βγ» πΏππππΎπ ${detect ? 'β' : 'β'} 
βγ» πΌππππππππππ ${global.db.data.users[m.sender].autolevelup ? 'β' : 'β'}
βγ» ππππΎπππ πΌππΌπΏππ π ππΌπΎπΌπ ${global.db.data.settings[conn.user.jid].restrict ? 'β' : 'β'}
βγ» ππππΎπππ π½ππ πππππππΌπ ${global.db.data.settings[conn.user.jid].temporal ? 'β' : 'β'}
βγ» ππππΎππππ ${stickers ? 'β' : 'β'}
βγ» πππΌπΎπΎπππππ πΏπ ππππππ ${reaction ? 'β' : 'β'}
βγ» πΌπππππππΎπππ ${autosticker ? 'β' : 'β'} 
βγ» πΌππΏπππ ${audios ? 'β' : 'β'} 
βγ» πππΏπ πππππ ${modohorny ? 'β' : 'β'} 
βγ» πΌππππππππΎ ${antitoxic ? 'β' : 'β'} 
βγ» πΌπππ πππππππΌπΎππππΌπ ${antifake ? 'β' : 'β'} 
βγ» πΌπππ πππ ${antiver ? 'β' : 'β'}
βγ» πΌππππΏπππππ ${global.db.data.chats[m.chat].delete ? 'β' : 'β'}
βγ» πΌπππππππ ${antiLink ? 'β' : 'β'} 
βγ» πΌπππππππ *2* ${antiLink2 ? 'β' : 'β'} 
βγ» πΌπππ ππππππ ${antiTiktok ? 'β' : 'β'}
βγ» πΌπππ πππ πππ½π ${antiYoutube ? 'β' : 'β'}
βγ» πΌπππ πππππππΌπ ${antiTelegram ? 'β' : 'β'}
βγ» πΌπππ ππΌπΎππ½πππ ${antiFacebook ? 'β' : 'β'}
βγ» πΌπππ πππππΌπππΌπ ${antiInstagram ? 'β' : 'β'}
βγ» πΌπππ πππππππ ${antiTwitter ? 'β' : 'β'}
β
β°ββββ° *π  ${vs}* β±βββ¬£
`.trim()
await conn.sendButton(m.chat, wm, text, img5, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']], m, dos.getRandom())
//conn.sendHydrated(m.chat, text, wm, img5, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
//], m,)
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(configuraciΓ³n|settings|setting|confugurar|configuracion|vergrupo|gruporesumen|resumen)$/i
handler.group = true
export default handler
