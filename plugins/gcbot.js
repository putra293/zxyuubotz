let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ZXYUU GRUP 〕 ❉────── 
║│➸ *_GROUP KRINJ BANH😅👆_*
║│➸  https://chat.whatsapp.com/ItgtoArOdVD46P7S9cA179
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
_*Putzz-BOTZ*_ by.Putra
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
