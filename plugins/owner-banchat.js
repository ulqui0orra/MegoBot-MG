let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ تم تعطيل البوت في هذه المجموعة')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['حظر']

handler.group = true
handler.owner = true
handler.admin = true

export default handler
