//Codigo GataNina-Li
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''


const response = await fetch('https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/EXOTICO/exotico.json')  
const data = await response.json()
let { exoticbot, exocanal } = data.info

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//No se
global.botexotic = exoticbot.instagram
global.botexotic2 = exoticbot.exoticobot_md
global.botexotic3 = exoticbot.facebook
global.botexotic4 = exoticbot.paypal
global.botexotic5 = exoticbot.instagram
global.botexotic6 = exoticbot.mail
global.botexotic7 = 'https://wa.me/5493873232221'
global.botexotic8 = exoticbot.all

global.lolexotico = exocanal.channelofc

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//redes
global.fb = 'no disponible aun'
global.md = 'https://github.com/MultiBot-OFC/ExoticoBot-MD'
global.md2 = 'https://github.com/MultiBot-OFC'
global.paypal = 'https://www.paypal.me/ColaboracionBotOFC'
global.ig = 'no disponible aun'
global.exoticomail = 'josueveniciovargas@gmail.com'
global.cuentaofc = 'https://wa.me/5491133980551'
global.asistencia = 'https://wa.me/5493873232221'
global.atomofc = 'https://atom.bio/exotico-ofc'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//grupos
global.grupo1 = 'https://chat.whatsapp.com/JTj6OkGZ6exLnAIJkPqIgA'
global.grupo2 = 'https://chat.whatsapp.com/I9LGemZUOAK5bbiHfcdcRx'
global.grupo3 = 'https://chat.whatsapp.com/GHMU94F45nW1RyRcXifiQb'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//ubicado
global.creador = 'https://wa.me/5493873232212'
global.mycanal = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Cuentas get random
global.exoticoRedes = [md, paypal, paypal, md, paypal, atomofc, atomofc, mycanal, mycanal, md, asistencia, asistencia]
global.exoticCnts = [mycanal, grupo1, atomofc, atomofc, grupo2, grupo3, md, paypal, asistencia, creador, md]
global.exoticoAll = [asistencia, atomofc, mycanal, grupo1, grupo2, grupo3, md, paypal, atomofc, paypal, md, asistencia]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
// Imágenes 
global.imagen1 = fs.readFileSync("./Multi_Imagen/exotico1.jpg")
global.imagen2 = fs.readFileSync("./Multi_Imagen/exotico2.jpg")
global.imagen3 = fs.readFileSync("./Multi_Imagen/exotico3.jpg")
global.imagen4 = fs.readFileSync("./Multi_Imagen/exotico4.jpg")
global.imagen5 = fs.readFileSync("./Multi_Imagen/exotico5.jpg")
global.imagen6 = fs.readFileSync("./Multi_Imagen/exotico6.jpg")
global.imagen7 = fs.readFileSync("./Multi_Imagen/exotico7.jpg")
global.imagen8 = fs.readFileSync("./Multi_Imagen/exotico8.jpg")
global.imagen9 = fs.readFileSync("./Multi_Imagen/exotico9.jpg")
global.imagen10 = fs.readFileSync("./Multi_Imagen/exotico10.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//menus
global.menuImg1 = fs.readFileSync("./Multi_Imagen/Menu1.jpg")
global.menuImg2 = fs.readFileSync("./Multi_Imagen/Menu2.jpg")
global.menuImg3 = fs.readFileSync("./Multi_Imagen/Menu3.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//paypal
global.imgpaypal = fs.readFileSync("./Multi_Imagen/paypal.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes de handler.js advs
global.imgAdv = 'https://telegra.ph/file/be70073e7e14fdb7f9cba.jpg'
global.imgAdv2 = 'https://telegra.ph/file/2f71a434e7bbe5864ce2e.jpg'
global.imgAdv3 = 'https://telegra.ph/file/6244b3ffc194dbda90e65.jpg'
global.imgAdv4 = 'https://telegra.ph/file/a89c40c1cf062b3397a11.jpg'
global.imgAdv5 = 'https://telegra.ph/file/0d7775bd4cf2ec4847db4.jpg'
global.imgAdv6 = 'https://telegra.ph/file/ac351a18272c246a48dbb.jpg'
global.imgAdv7 = 'https://telegra.ph/file/e7ed70b5d04bf55536704.jpg'
global.imgAdv8 = 'https://telegra.ph/file/6db49fba157558ec09a03.jpg'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Stickers de Exotico Bot
global.exocafecito = fs.readFileSync("./STICKER/exotico.jpg")

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Foto version 2
global.imag1 = 'https://telegra.ph/file/2f71a434e7bbe5864ce2e.jpg'
global.imag2 = 'https://telegra.ph/file/66e5987e174c02696641e.jpg'
global.imag3 = 'https://telegra.ph/file/6244b3ffc194dbda90e65.jpg'
global.imag4 = 'https://telegra.ph/file/a89c40c1cf062b3397a11.jpg'
global.imag5 = 'https://telegra.ph/file/4b9a9151cd53427d697a2.jpg'
global.imag6 = 'https://telegra.ph/file/04da417fda5683f08b18f.jpg'
global.imag7 = 'https://telegra.ph/file/0d7775bd4cf2ec4847db4.jpg'
global.imag8 = 'https://telegra.ph/file/ac351a18272c246a48dbb.jpg'
global.imag9 = 'https://telegra.ph/file/89affade811755f4f5ec4.jpg'
global.imag10 = 'https://telegra.ph/file/6db49fba157558ec09a03.jpg'
global.imag11 = 'https://telegra.ph/file/f5dc2f8c20f2c0e1fa65a.jpg'
global.imag12 = 'https://telegra.ph/file/e7ed70b5d04bf55536704.jpg'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//fotos cuadradas.
global.img = 'https://telegra.ph/file/9848f5a79db976bd81412.jpg'
global.img2 = 'https://telegra.ph/file/e3a8e7662085c2408a364.jpg'
global.img3 = 'https://telegra.ph/file/be70073e7e14fdb7f9cba.jpg' 
global.img4 = 'https://telegra.ph/file/3bb0ba7c872888910f187.jpg' 
global.img5 = 'https://telegra.ph/file/170e4d3d6d3b61bd001c0.jpg'
global.img6 = 'https://telegra.ph/file/904a0c6955906353add69.jpg'
global.img7 = 'https://telegra.ph/file/7e25ba80e27911432fa7f.jpg'
global.img8 = 'https://telegra.ph/file/8a608a3120edf66318a5e.jpg'
global.img9 = 'https://telegra.ph/file/f3f14be94ffbf2af7c91a.jpg'
global.img10 = 'https://telegra.ph/file/992e96bdaa4d4f16157e2.jpg'
global.img11 = 'https://telegra.ph/file/2065ba7752f4699c80c6b.jpg'
global.img12 = 'https://telegra.ph/file/083aac29c82fd4daabda8.jpg'
global.img13 = 'https://telegra.ph/file/7faa584c06802a99b4c37.jpg'
global.img14 = 'https://telegra.ph/file/e4b622704c514398bad37.jpg'
global.img15 = 'https://telegra.ph/file/728884baa1ba9eb98e072.jpg' 
global.img16 = 'https://telegra.ph/file/728884baa1ba9eb98e072.jpg' 
global.img17 = 'https://telegra.ph/file/b91ecba67229defc0012e.jpg'
global.img18 = 'https://telegra.ph/file/e4b622704c514398bad37.jpg'
global.logogit = 'https://qu.ax/RzKF.jpg'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//videos
global.videoRandom = ['https://qu.ax/uLtU.mp4', 'https://qu.ax/ukVe.mp4', 'https://qu.ax/lMxG.mp4', 'https://qu.ax/hAag.mp4', 'https://qu.ax/SNLc.mp4', 'https://qu.ax/ysCL.mp4']

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//fotos cuadradas
global.menusRB = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes
global.imagenRB = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//menus 3
global.multiMenus = [menuImg1, menuImg2, menuImg3]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Imagenes advs
global.imgAdvs = [imgAdv, imgAdv2, imgAdv3, imgAdv4, imgAdv5, imgAdv6, imgAdv7, imgAdv8]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//Videos
global.videoMenu1 = 'https://qu.ax/uLtU.mp4'
global.videoMenu2 = 'https://qu.ax/lMxG.mp4'
                                 
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘗𝘪𝘤𝘬 𝘳𝘢𝘯𝘥𝘰𝘮.
global.wait = "❮🌌❯ •═────────────• *10%*"
global.waitt = "❮🌌❯ •═══──────────• *33%*"
global.waittt = "❮🌌❯ •═══════──────• *64%*"
global.waitttt = "❮🌌❯ •═══════════──• *87%*"
global.waittttt = "❮🌌❯ •═════════════• *100%*"

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘋𝘦𝘴𝘵𝘳𝘢𝘣𝘢.
global.destraba = `𝘽𝘼𝙎𝙄𝘾 / 𝙏𝙀𝙓𝙏\n\n⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞\n\n> 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦•❲ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 ❳•꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*
//𝘐𝘨𝘯𝘰𝘳𝘦𝘯 𝘦𝘴𝘵𝘦 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰.
global.fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }


global.fakeChannel = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'

const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: menusRB, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 


let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Multi_Imagen/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'WhatsApp bot / MultiBot', sourceUrl: exoticoAll, thumbnail: await(await fetch(global.imgRB)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: wm, body: ' • ExoticoBot-MD / Multi Bot • ', thumbnailUrl: menusRB, sourceUrl: exoticoAll }}}
let dos = [enlace, enlace2]  


}
export default handler


global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

                      
