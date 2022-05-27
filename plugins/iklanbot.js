let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE JAROTBOTZ*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE JAROTBOTZ🛒',
        description: kontol,
        sections:  [{title: "STORE JAROTBOTZ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewasat"},
        {title: 'Jasa run oscar', description: "jasa run bot", rowId:".runbotoscar"},
        {title: 'RULES', description: "rules jarotbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
