import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/5aa73a371ea32c99d3b4e.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*🥷✬⃝┇اسـمـــي "الـكـيـورا"*
*🥷✬⃝┇وقـــت الـعــمـل* ${uptime} 
*🥷✬⃝┇الـبــوت لـجــروبـات الـواتـســاب*
*🥷✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*
*🥷✬⃝┇هــا لــك أوامـــر الـبــوت ☟*

*〄━━┋ ★الـأوامــر★ ┋━━〄*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَا مُحَمد ﷺ ❁*

‹🕋›┋قسـم الديـن┇⇩
*┓─━✦❮🕋❯✦━─┏*

🌞┊⬅︎ اذكار الصباح
🌙┊⬅︎ اذكار المساء
🎤┊⬅︎ صوت 1

*┛─━✦❮🕋❯✦━─┗*

*‹🗳️›┋قــسم التحمــيل┇⇩*

*┓─━✦❮🗳️❯✦━─┏*

*🔎┊⬅︎ بحث*
*🎧┊⬅︎ شغل*
*📽️┊⬅︎ فيديو*
*🎞️┊⬅︎ انستا*
*🎵┊⬅︎ تيك*
*🎛️┊⬅︎ بلاي*
*🖼️┊⬅︎ صوره*
*🎨┊⬅︎ فريبيك*
*🖼️┊⬅︎ بينترست*

*┛─━✦❮🗳️❯✦━─┗*

*‹♻️›┋قســم التحويــل┇⇩*

*┓─━✦❮♻️❯✦━─┏*

*📝┊⬅︎ كود*
*🎈┊⬅︎ ملصق*
*🚨┊⬅︎ سرقه*
*🎭┊⬅︎ دمج*
*🌅┊⬅︎ لصوره*
*🖼┊⬅︎ لكرتون*
*♻️┊⬅︎ لانمي*
*🎥┊⬅︎ لفيديو*
*📷┊⬅︎ تليجراف*
*🎴┊⬅︎ جوده*
*🎨┊⬅︎ غيف*
*🔎┊⬅︎ طمس*

*┛─━✦❮♻️❯✦━─┗*

*‹👥›┋قســم الجــروبــات┇⇩*

*┓─━✦❮👥❯✦━─┏*

*👮┊⬅︎ المشرفين*
*🏘┊⬅︎ الجروب*
*👻┊⬅︎ مخفي*
*📣┊⬅︎ منشن*
*👻┊⬅︎ الاشباح*
*🔗┊⬅︎ لينك*
*🆙┊⬅︎ رفع*
*🔻┊⬅︎ خفض*
*🖇️┊⬅︎ رستر*
*🧲┊⬅︎ ضيف*
*👞┊⬅︎ طرد*
*📋┊⬅︎ اعفااء*
*🔋┊⬅︎ دعوه*
*✏️┊⬅︎ تغيرالاسم*
*📄┊⬅︎ تغيرالوصف*
*🌃┊⬅︎ تغيرالصوره*
*🔓┊⬅︎ جروب فتح*
*🔒┊⬅︎ جروب غلق*

*┛─━✦❮👥❯✦━─┗*

*‹📽️›┋قســم الصــور و الايــدت┇⇩*

*┓─━✦❮📽️❯✦━─┏*

*🌆┊⬅︎ خلفيه*
*🧩┊⬅︎ مميز*
*👩‍❤️‍👨┊⬅︎ طقم*
*🧒┊⬅︎ طقم2*
*👧🏻┊⬅︎ طقمي*
*🐶┊⬅︎ كلب*
*🐱┊⬅︎ قط*
*📹┊⬅︎ ايدت*
*🖼️┊⬅︎ تصميم*
*🎞️┊⬅︎ جوده*
*👑┊⬅︎ ايزن*

*┛─━✦❮📽️❯✦━─┗*

*‹🙋‍♂️›┋قســم الاعــضــاء┇⇩*

*┓─━✦❮🙋‍♂️❯✦━─┏*

*💌┊⬅︎ بروفايل*
*👨🏻‍💻┊⬅︎ المطور*
*🩸┊⬅︎ الدعم*
*🗣️┊⬅︎ انطق*
*🔒┊⬅︎ الخصوصيه*
*🧿┊⬅︎ اقتباس*
*✅┊⬅︎ حي*
*🚫┊⬅︎ ابلاغ*
*📟┊⬅︎ الرقم-التسلسلي*
*📶┊⬅︎ التفعيل*
*⏏️┊⬅︎ تسجيل-خروج*
*🟢┊⬅︎ بنق*
*⚡┊⬅︎ نشاط*

*┛─━✦❮🙋‍♂️❯✦━─┗*

*‹👑›┋قســم المــطــور┇⇩*

*┓─━✦❮👑❯✦━─┏*

*👑┊⬅︎ بريم*
*⛔┊⬅︎ حظر*
*💁┊⬅︎ الغاء-الحظر*
*⛔┊⬅︎ المحظورين*
*👑┊⬅︎ المميزين*
*📛┊⬅︎ البلوكات*
*🚷┊⬅︎ بان*
*🚷┊⬅︎ رفع-البان*
*🚪┊⬅︎ بلوك*
*🚪┊⬅︎ رفع-البلوك*
*🚀┊⬅︎ انضم*
*🚶┊⬅︎ اخرج*
*📢┊⬅︎ نشر*
*❕┊⬅︎ ارفعني*
*🔄┊⬅︎ ريستارت*
*🥷┊⬅︎ زرف*
*🎫┊⬅︎ وضع-صوره*

*┛─━✦❮👑❯✦━─┗*

*‹🎢›┋قســم الترفــيــه┇⇩*

*┓─━✦❮🎢❯✦━─┏*

*❓┊⬅︎ لو*
*🔝┊⬅︎ توب*
*🤖┊⬅︎ بوت (حط قبل الكلمه نقطه! )*
*🌬️┊⬅︎ صوت-انمي1*
*👾┊⬅︎ تحدث*
*❓┊⬅︎ سؤال*
*🎀┊⬅︎ زخرفه*
*🌃┊⬅︎ logo*
*🗣️┊⬅︎ انصح*
*👩‍❤️‍👨┊⬅︎ زواج*
*⚖┊⬅︎ طلاق*
*🥴┊⬅︎ غباء* 
*💡┊⬅︎ ذكاء*
*😳┊⬅︎ جمال*
*❔┊⬅︎ هل*
*🧨┊⬅︎ خط*
*🔖┊⬅︎ احزر* 
*🏷️┊⬅︎ تاج*
*👁┊⬅︎ عين*
*🏳️┊⬅︎ علم*
*💭┊⬅︎ شات*
*🚗┊⬅︎ سيارات*
*🫂┊⬅︎ رفيق*
*📐┊⬅︎ رياضه*
*🔧┊⬅︎ فكك*
*🔠┊⬅︎ حروف*
*🎰┊⬅︎ رهان*
*🪙┊⬅︎ جنيه* 
*💣┊⬅︎ دحيح*
*📣┊⬅︎ اصطناعي*
*🪨┊⬅︎ وهمي*
*👑┊⬅︎ رونالدو*
*🐐┊⬅︎ ميسي*
*⁉️┊⬅︎ قدوتي*
*🔪┊⬅︎ جريمة*
*🎲┊⬅︎ نرد*
*🫂┊⬅︎ احضن*
*🤕┊⬅︎ اصفع*
*🌤️┊⬅︎ مناخ*

*┛─━✦❮🎢❯✦━─┗*

*‹🏦›┋قســم البــنــك┇⇩*

*┓─━✦❮🏦❯✦━─┏*

*🏦┊⬅︎ البنك*
*🏦┊⬅︎ شراء*
*🏦┊⬅︎ يومي*
*🏦┊⬅︎ لفل*
*🏦┊⬅︎ تحويل*
*🏦┊⬅︎ تصنيف*
*🏦┊⬅︎ هجوم*
*🏦┊⬅︎ اضف-جواهر*
*🏦┊⬅︎ اضف-اكسبي*
*🏦┊⬅︎ تعدين*

*┛─━✦❮🏦❯✦━─┗*

*‹🔊›┋قســم الـصـوتـيـات┇⇩*

*┓─━✦❮🔊❯✦━─┏*

*🔊┊⬅︎ عميق*
*🔊┊⬅︎ عميق2*
*🔊┊⬅︎ منفوخ*
*🔊┊⬅︎ تحسين*
*🔊┊⬅︎ سريع*
*🔊┊⬅︎ تسريع-بسيط*
*🔊┊⬅︎ عكس*
*🔊┊⬅︎ الي*
*🔊┊⬅︎ بطئ*
*🔊┊⬅︎ سلس*
*🔊┊⬅︎ سنجاب*

*┛─━✦❮🏦❯✦━─┗*

❮🗒️❯ مــلاحــــظــــة

✦͡𓌗𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𓌗✦

①- يمنع سب البوت
②- استخدم البوت ب شكل متوازن
③- لا تسوي سبام للبوت

✦͡𓌗𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𓌗✦

~Ulquiorra Bot~`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇𝔘𝔩𝔮𝔲𝔦𝔬𝔯𝔯𝔞┇🤖┇𝔅𝔬𝔱┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://telegra.ph/file/5aa73a371ea32c99d3b4e.jpg`

}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
