let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA _*ZXYUUBOTZ*_,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ RomzBotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|rot|jarot|bot|haibotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
