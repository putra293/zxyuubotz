let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/P.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*PA PE PA PE, SALAM YANG BENER NGNTD!!', 'status@broadcast')
}

handler.customPrefix = /^(p|P)$/i
handler.command = new RegExp

module.exports = handler
