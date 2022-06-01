let handler = async (m, { conn }) => {
let caption = `_*Sip Dah aktif ngab*_`

conn.sendButton( m.chat, caption, `©️ Xzyuu Naii`, `BISA ROM`, `.yoi`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
