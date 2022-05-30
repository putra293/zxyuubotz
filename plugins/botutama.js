const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


    "displayName": "OWNER",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:OWNER;;;\nFN:OWNER\nitem1.TEL;waid=6281224804625:6281224804625\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:romlisuhanda0401.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Romzz\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ ZxyuuBotz ]───────\nEND:VCARD"
  }, {
    "displayName": "BOT UTAMA",
      "vcard": ""BEGIN:VCARD\nVERSION:3.0\nN:bot utama;;;\nFN:BOT\nitem1.TEL;waid=6281224804625:6281224804625\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:myromlisuhanda0401@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Romzz\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Tokyo 🇯🇵\nitem5.X-ABLabel:───────[ ZxyuuBotz ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(botutama)$/i

module.exports = handler
