let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

_MINTA AJA SAMA OWNER_

WHATSAPP OWNER :
https://wa.me/6288270863279

JOIN GC BOT:
https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK

conn.sendBut(m.chat, esce, 'Chat Owner Kids', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
