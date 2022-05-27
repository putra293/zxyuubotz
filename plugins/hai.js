let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA JAROTBOTZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ jarotbotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|rot|jarot|bot|haibotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
