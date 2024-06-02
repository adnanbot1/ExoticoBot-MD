import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `${wm}`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw 'Ocurrio un error, intentalo de nuevo.'
}}
handler.help = ['cat']
handler.tags = ['random']
handler.command = /^cat$/i
handler.fail = null
export default handler