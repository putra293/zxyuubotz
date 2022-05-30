let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : ROMLI
║│➸ ```UMUR``` : 16thn
║│➸ ```ASAL``` : PONTIANAK
║│➸ ```GRUP GABUT``` :https://chat.whatsapp.com/ItgtoArOdVD46P7S9cA179
║│➸ ```ISTAGRAM``` : -
║│➸ ```WHATSAPP``` : http://wa.me/6281224804625
╰────────❉
`.trim(), m)
}

handler.help = ['inforomli']
handler.tags = ['main', 'utama']
handler.command = /^(inforomli)$/i

handler.exp = 150

module.exports = handler
