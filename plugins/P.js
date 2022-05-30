let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/P.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Salam Dong Nggak Usah P, Kek Orng ga sekolah ae lu ngntd!!', 'status@broadcast')
}

handler.customPrefix = /^(p|P)$/i
handler.command = new RegExp

module.exports = handler
