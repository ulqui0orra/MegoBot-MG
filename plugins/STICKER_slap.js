import fetch from 'node-fetch';
import {sticker} from '../lib/sticker.js';
// import db from '../lib/database.js'

const handler = async (m, {conn, args, usedPrefix, command}) => {
	 let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) return m.reply(`✳️ منشن اللي عايز تصفعه`);

  const user = global.db.data.users[who];
  const name = conn.getName(who);
  const name2 = conn.getName(m.sender);

  const rki = await fetch(`https://api.waifu.pics/sfw/slap`);
  if (!rki.ok) throw await rki.text();
  const jkis = await rki.json();
  const {url} = jkis;
  const stiker = await sticker(null, url, `${name2} يصفع ولا يبالي `, `${name}`);
	conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {'forwardingScore': 200, 'isForwarded': false, 'externalAdReply': {showAdAttribution: false, body: `h`, mediaType: 2}}}, {quoted: m});
};

handler.help = ['slap @tag'];
handler.tags = ['rnime'];
handler.command = /^(صفعه|صفعة|اصفع)$/i;
handler.group = true;

export default handler;
