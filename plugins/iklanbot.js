let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE ZxyuuBotz*
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'STORE ZXYUU-BOTZ',
        description: kontol,
        sections:  [{title: "STORE ZXYUUBOTZ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa ZxyuuBotz', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewasat"},
        {title: 'Jasa run oscar', description: "jasa run bot", rowId:".runbotoscar"},
        {title: 'RULES', description: "rules ZxyuuBotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
