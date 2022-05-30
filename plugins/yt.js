let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 YOUTUBE 〕 ❉────── 
║│➸ *_YOUTUBE OWNER_*
║│➸ 1: https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
║│➸ 2: https://youtu.be/GgLr_BV9ijg
╰─────────❉
ZxyuuBotz by.Romli
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['yutube']
handler.tags = ['info']
handler.command = /^ytzi$/i

module.exports = handler
