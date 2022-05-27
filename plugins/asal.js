let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : jarot ( nama samaran ) 
║│➸ *Umur* : 18
║│➸ *Kelas* :  lulus
║│➸ *Status* : butuh ayng AWOKAWOK
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_KALIMANTAN BARAT =}} KUBURAYA_*
║│➸ *ASAL KOTA* : *_PONTIANAK_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│➸ *Gmail* : jarotganteng559@gmail.com
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'ROZI')).buffer(), ext, 'zifabotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewazifa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
