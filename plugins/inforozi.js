let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : JAROT
║│➸ ```UMUR``` : 18thn
║│➸ ```ASAL``` : PONTIANAK
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/EQ2R3O3ckPkJZrs1MhCtQp
║│➸ ```ISTAGRAM``` : http://instagram.com/zalfapontianak
║│➸ ```WHATSAPP``` : http://wa.me/6285850539404
╰────────❉
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
