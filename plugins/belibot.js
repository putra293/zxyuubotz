let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ 𝟏 ᗷᑌᒪᗩᑎ
├⬡ 4 ᗷᑌᒪᗩᑎ
├⬡ 8 BULAN
└═══════════════
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : -
║│➸ *PULSA*: 083856051043
║│➸ *GOPAY*: -
║╰─────────
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║║▌║▌║█│
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '4 Bulan', description: "Rp30.000\nSewa bot selama 4 bulan.", rowId:".payment"},
        {title: '1 Bulan', description: "Rp15.000\nSewa bot selama 1 bulan.", rowId:".payment"},
        {title: '8 bulan', description: "Rp40.000\nSewa bot selama 8 bulan.", rowId:".payment"},
        {title: 'Owner', description: "Chat owner nya jika ingin sewa bot.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewaOscar)$/i
handler.help = ['sewaOscar']
module.exports = handler
//R-Txzy
