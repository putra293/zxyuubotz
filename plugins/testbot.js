let handler = async (m, { conn }) => {
let caption = `_*Sip Dah Aktif Jing*_`

conn.sendButton( m.chat, caption, `©️ Vyn Putzz`, `BIASA PUTRA`, `nai`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
