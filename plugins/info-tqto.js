/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = `
BIG THANKS TO

⤿ DanzzOfc
  📮 https://github.com/DanzGamtevk75
  
THANKS PARA DONASI YANG TERHORMAT
`
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
