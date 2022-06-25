let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Danzz
║│➸ ```UMUR``` : Private
║│➸ ```ASAL``` : Riau
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK
║│➸ ```ISTAGRAM``` : Private
║│➸ ```WHATSAPP``` : http://wa.me/6288270863279
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
