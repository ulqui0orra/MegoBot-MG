let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^اعلان ديث نوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اســتـمــارة الدخول〔🔮〕
╔═━═━═❰🔮❱═━═━═╗
❶ | اللقب: ❰❱ 

❷ | الانمي : ❰❱

❸ | من طرف ❰❱

❹ | ولد / بنت 👱🏻👱🏻‍♀️ ❰❱

و لا تنسى ارفاق صورة للشخصية

تنورو نقابتنا المتواضعة 🔥✨

╚═━═━═❰🔮❱═━═━═╝
قوانين الدخول: 
❴ممنوع ولد ياخذ لقب بنت او العكس❵
❴ممنوع الأرقام الوهمية❵
❴منشن مشرف عندما تقوم بتعبئة الإستمارة❵
❴مسموح ألقاب من المانغا و المانهوا❵
╚═━═━═❰🔮❱═━═━═╝
‏⁕┇ ⦏𝗣.𝗥.𝗦⊰🔮⊱𝗛𝗼𝗴 𝗪𝗮𝗿𝘁𝘀⦐┇⁕
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

   if (/^لعب ديث نوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*⌝ فعالية الديث نوت╎ 📓⌞*
*══━━━━🔮◈🔮━━━━══*

*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*
*✠ لقب┃📓┃ الضحايا┃0┃*

*══━━━━🔮◈🔮━━━━══*
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

   if (/^نتائج ديث نوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*══━━━━🔮◈🔮━━━━══*

*•📓┇نـتـائـج فـعـالـيـة الـديـث نـوت┇📓•*

*══━━━━🔮◈🔮━━━━══*
*❆ الــفــائــز 🏆 : ┇ ┇*
*❅ الـجـائـزة 🪙 : ┇40k┇*

*══━━━━🔮◈🔮━━━━══*
*❆ بـاقــي الـمـشـاركـيـن 🏅*
*❅ ┇ ┇*
*❅ ┇ ┇*
*❅ ┇ ┇*
*❅ ┇ ┇*
*❅ ┇ ┇*
*❅ ┇ ┇*
*❅ ┇ ┇*

*❆ الـجـائـزة 🪙 : ┇20k┇*
*══━━━━🔮◈🔮━━━━══*

*❆ الـمـقـدم 🕵🏻‍♂️ : ┇ ┇*
*❅ الـجـائـزة 🪙 : ┇60k┇*

*══━━━━🔮◈🔮━━━━══*
*✾تــ✍︎ــوقــيــع ↯:*
*『𝑪𝒐𝒍𝒅≼🔮≽𝑵𝒊𝒈𝒉𝒕』*
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

 return !0 } 
 export default handler