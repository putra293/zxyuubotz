let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
  conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Pantun')).buffer(), `*────────「 *Pantun* 」 ────────*\n\n${pickRandom(global.pantun)}`, '_*Bot By Romli*_', 'Pantun', `.pantun`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nTanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nAkhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nWaktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nHari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nAyam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nApi kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nPergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian.\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nBeli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat\n *@ZxyuuBOTZ*",
" *PANTUN:*\n\nMinum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.\n *@ZxyuuBOTZ",
]
