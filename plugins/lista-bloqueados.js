import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: `${wm}`, thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `π πππ¦π§π ππ πππ’π€π¨ππππ’π¦ : πππ’ππππ\n\n*Total :* ${data.length}\n\nβ­βββ[ *${vs} π * ]ββββ¬£\n`
for (let i of data) {
txt += `βπ« @${i.split("@")[0]}\n`
}
txt += "β°ββββββββ¬£"
return conn.sendButton(m.chat, txt, `*Por favor no llame para evitar ser Bloqueado, Gracias.*\n\n*Please do not call to avoid being Blocked, Thank you.*\n\n` + wm, null, [ 
['π  π π‘ π¨ βοΈ', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg}ππΌπΏππ ππΌ πππΏπ π½ππππππΌπΏπ\n\nππ πππ ππΌπ π½πππ π½πππΎπππΏ`, wm, gata, [
['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
