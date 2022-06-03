let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
_*Hai*_ *%name!*
┏━━〔 Info %name 〕━ꕥ
┃✾ Limit : *%limit* Limit
┃✾ Role : *%role*
┃✾ Level :
┃✾ *%level (%exp / %maxexp)* [%xp4levelup]
┃✾ %totalexp XP secara Total 
┗━━━━━━━━ꕥ

┏──『 *Today* 』──⬣
│⬡  Tanggal: 
│⬡  *%week %weton, %date*
│⬡  Tanggal Islam:
│⬡  *%dateIslamic*
│⬡  Waktu: *%time*
│⬡  Uptime: *%uptime (%muptime)*
│⬡  Database: %rtotalreg dari %totalreg
┗──────────⬣
%readmore`.trimStart(),
  header: '┏━━ꕥ〔 %category 〕ꕥ━⬣ ',
  body: '  ┃ ⎙ %cmd %islimit %isPremium',
  footer: '┗━ꕥ\n',
  after: `
 _*Botz By Putra*_
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
        let bzz = './src/Jarot.mp3'
	let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
	let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'cristian', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': '*Utama*',
    'game': '*Game*',
    'xp': '*Exp & Limit*',
    'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': '*Stiker*',
    'edukasi': '*Edukasi*',
    'news': '*News*',
    'kerang': '*Kerang Ajaib*',
    'quotes': '*Quotes*',
    'admin': `Admin ${global.opts['admin'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': '*Epic Rpg*',
    'group': '*Grup*',
    'anime': '*Anime*',
    'premium': '*Premium*',
    'internet': '*Internet*',
    'image': '*Random Image*',
    'anonymous': '*Anonymous Chat*',
    'nulis': '*MagerNulis & Logo*',
    'downloader': '*Downloader*',
    'tools': '*Tools*',
    'cristian': '*cristian*',
    'fun': '*Fun*',
    'database': '*Database*',
    'vote': '*Voting*',
    'absen': '*Absen*',
    'quran': '*Islam*',
    'audio': '*Pengubah Suara*',
    'jadibot': '*Jadi Bot*',
    'info': '*Info*',
    '': '*Tanpa Kategori*',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'Hentai',
    'bokep': 'Bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'cristian') tags = {
    'cristian': 'Cristian'
  }
  if (teks == 'admin') tags = {
    'admin': 'Admin'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `*${ucapan()}, ${name}*`.trim(),
                        "description": `┏━━〔 *PutzzBotz* 〕━ꕥ
┃✾ *Aktif Selama:* _*${uptime}*_
┃✾ *Info Batre* _*${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}*_
┃✾ *User:* _*${Object.keys(global.db.data.users).length}*_ 
┃✾ *Terblok:* _*${conn.blocklist.length}*_ 
┃✾ *User keban:*  _*${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}*_ 
┃✾ *Ban:* _*${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*_  
┗━━━━━━━━ꕥ
┏──『 _*Bot Info*_ 』──⬣
│⬡ Version : 15.0
│⬡ Browser : ${conn.browserDescription[1]}
│⬡ Host Number : @${global.conn.user.jid.split('@')[0]}
│⬡ WhatsApp Web Name : ${conn.browserDescription[0]}
│⬡ WhatsApp Web Version : ${conn.browserDescription[2]}
│⬡ Platform : Heroku
┗──────────⬣
_*Bot By Putra*_`.trim(),
                        "footerText": "PutzzVyn",
                        "buttonText": "KLIK DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title":  "☰ Donasi ",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar aktif selalu",
                                    "rowId": ".donasi"
                                }, {
                                    "title":      "☰ Pertanyaan Tentang Bot Ini ",
                                    "description": "PutzzVyn",
                                    "rowId": ".qna"
                                }, {
 "title":      "☰ Setelan grub",
                                    "description": "setelan grub",
                                    "rowId": ".setelangrub"
                                }, {
"title":      "☰ Store Menu",
                                    "description": "store di PutzzBotz",
                                    "rowId": ".iklan"
                                }, {
  "title":  "☰ jadibot",
                                    "description": "bergabung bersama bot ROMZZ",
                                    "rowId": ".jadibot"
                                }, {
  "title":  "☰ group",
                                    "description": "bergabung di grub bersama bot",
                                    "rowId": ".gcbot"
                                }, {
  "title":  "☰ biodata owner",
                                    "description": "informasi owner",
                                    "rowId": ".infoowner"
                                }, {
                                    "title": "☰ Sewa bot",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa bot.",
                                    "rowId": ".sewa"
                                }],
                                "title": "⟣─────────❲ Tentang Bot dan lainnya ❳──────────⟢"
                            }, {
                                "rows": [{
                                    "title": `☰ Semua Perintah`,
                                    "description": "Memberikan Semua Fitur Bot",
                                    "rowId": ".? all",
                                }, { 
                                    "title": "☰--Menu Islam 「 0 」",
                                    "description": "Menu Tentang Islam",
                                    "rowId": ".? quran"
                                }, {
 "title": "☰--Menu Doa Harian「 1 」",
                                    "description": "Menu doaharian",
                                    "rowId": ".doaharian"
                                }, {
                                	"title": "☰--Menu Kristen「 2 」",
                                    "description": "Menu Tentang Kristen",
                                    "rowId": ".? cristian"
                                }, {
                                    "title": "☰--Menu Edukasi「 3 」",
                                    "description": "Menu Edukasi Di PutzzBotz",
                                    "rowId": ".? edukasi"
                                }, { 
                                    "title": "☰--Menu Berita「 4 」",
                                    "description": "Menu Berita Di PutzzBotz",
                                    "rowId": ".? News"
                                }, { 
                                    "title": "☰--Menu Game「 5 」",
                                    "description": "Menu Game Di PutzzBotz",
                                    "rowId": ".? game"
                                }, { 
                                    "title": "☰--Menu RPG「 6 」",
                                    "description": "Menu RPG Di PutzzBotz",
                                    "rowId": ".? rpg"
                                }, { 
                                    "title": "☰--XP Dan Level「 7 」",
                                    "description": "XP Dan Level Lu",
                                    "rowId": ".? xp"
                                }, { 
                                    "title": "☰--Menu Haram「 8 」",
                                    "description": "Astarfirullah,Tobat Jing",
                                    "rowId": ".? nsfw"
                                }, { 
                                    "title": "☰--Menu Foto Random「 9 」",
                                    "description": "Menu Foto Di PutzzBotz",
                                    "rowId": ".? image"
                                }, { 
                                    "title": "☰--Menu Sticker「 10 」",
                                    "description": "Buat Sticker Lu Di PutzzBotz",
                                    "rowId": ".? stiker"
                                }, { 
                                    "title": "☰--Kerang Ajaib「 11 」",
                                    "description": "Menurut Kerang Ajaib..",
                                    "rowId": ".? kerangajaib"
                                }, { 
                                    "title": "☰--Menu Qoutes「 12 」",
                                    "description": "Liat Ajh su",
                                    "rowId": ".? quotes"
                                }, { 
                                    "title": "☰--Menu Khusus Admin「 13 」",
                                    "description": "Menu Buat Atmin 🗿",
                                    "rowId": ".? admin"
                                }, { 
                                    "title": "☰--Menu Khusus Group「 14 」",
                                    "description": "Menu Group Di PutzzBotz",
                                    "rowId": ".? grup"
                                }, { 
                                    "title": "☰--Menu Khusus Premium「 15 」",
                                    "description": "Beli Premium Biar bisa Pake",
                                    "rowId": ".? premium"
                                }, { 
                                    "title": "☰--Menu Internet「 16 」",
                                    "description": "Cari Sesuatu Di PutzzBotz",
                                    "rowId": ".? internet"
                                }, { 
                                    "title": "☰--Menu Anonymous「 17 」",
                                    "description": "Mainkan Anonymous Chat",
                                    "rowId": ".? anonymous"
                                }, { 
                                    "title": "☰--Menu Nulis & Logo「 18 」",
                                    "description": "Buat Lu Yang Mager Nulis🗿",
                                    "rowId": ".? nulis"
                                }, { 
                                    "title": "☰--Menu Download「 19 」",
                                    "description": "Download Sesuatu Di PutzxBotz",
                                    "rowId": ".? downloader"
                                }, { 
                                    "title": "☰--Menu Tools「 20 」",
                                    "description": "Tools Yang Bisa di Gunakan Di PutzzBotz",
                                    "rowId": ".? tools"
                                }, { 
                                    "title": "☰--Menu Ceriaa「 21 」",
                                    "description": "Menu Ceria🗿",
                                    "rowId": ".? fun"
                                }, { 
                                    "title": "☰--Menu Simpan「 22 」",
                                    "description": "Simpan Sesuatu Di Bot",
                                    "rowId": ".? database"
                                }, { 
                                    "title": "☰--Menu Vote & Absen「 23 」",
                                    "description": "Menu Vote & Absen Di PutzzBotz",
                                    "rowId": ".? vote"
                                }, { 
                                    "title": "☰--Menu Ubah Suara「 24 」",
                                    "description": "Ubah Suaramu Si PutzzBotz",
                                    "rowId": ".? audio"
                                }, { 
                                    "title": "☰--Menu Jadibot「 25 」",
                                    "description": "Numpang Botz",
                                    "rowId": ".? jadibot"
                                }, { 
                                    "title": "☰--Menu Wibu「 26 」",
                                    "description": "Cari Anime Di PutzzBotz",
                                    "rowId": ".? anime"
                                }, { 
                                    "title": "☰--Info ZxyuuBotz「 27 」",
                                    "description": "Info Tentang Bot",
                                    "rowId": ".? info"
                                }, { 
"title": "☰--Runtime Botz「 28 」",
                                    "description": "Runtime Botz",
                                    "rowId": ".runtime"
                                }, { 
                                    "title": "☰--Menu Tag「 29 」",
                                    "description": "tag diri sendiri",
                                    "rowId": ".tagme"
                                }, { 
"title": "☰--Menu Gambar「 30 」",
                                    "description": "gambar waifu",
                                    "rowId": ".waifu"
                                }, { 
"title": "☰--Menu Profile「 31 」",
                                    "description": "profile anda di PutzzBotz",
                                    "rowId": ".profile"
                                }, { 
                                    "title": "☰--Menu Khusus Owner「 32 」",
                                    "description": "Menu Khusus Putra/Goblok Doang🗿",
                                    "rowId": ".? owner"
                                }],
                                "title": "⟣──────────────❲  All-Menu  ❳──────────────⟢"
                            }, {
                                "rows": [{
                                    "title": "|👩‍💻| Owner PutzxBotz",
                                    "description": "pemilik PutraVyn",
                                    "rowId": ".owner"
                                }, {
                                    "title": "|🛠|--Status bot",
                                    "description": "Status dan informasi bot",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "|🖨️|--Rules PutzzBotz",
                                    "description": "Mari menaati peraturan demi Kita bersama",
                                    "rowId": ".rules"
                                }, {
                                    "title": "|🙏| Thanks To",
                                    "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                    "rowId": ".tqto"
                                }],
                                "title": "⟣──────────────❲ Penutup ❳───────────────⟢"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "6281224804625-1614953337@g.us",
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} cristian
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonImg(m.chat, await (await fetch(thumbfoto)).buffer(), text.trim(), watermark, 'OWNER BOTZ👤', `${_p}owner`, 'CARA BUAT BOT🤖', `.carabuatbot`, m)

 } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 50
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 50
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "udah malem ngntd, tidur Anj..!!"
  if (time >= 4) {
    res = "Selamat pagi Kak 🌅"
  }
  if (time > 10) {
    res = "Selamat siang Kak 🏜️"
  }
  if (time >= 15) {
    res = "Selamat sore Kak 🌄"
  }
  if (time >= 18) {
    res = "Selamat malam Kak 🌌"
  }
  return res
}
