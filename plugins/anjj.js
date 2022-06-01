let handler = async (m, { conn }) => {
let caption = `_*HAHA TOXIC, TERUSKAN BAKATMU DWCJK!!!*_`

conn.sendButton( m.chat, caption, `©️ RomzBotz`, `ANJAS AWOKAWOK`, `zxyuu`, m)

       }
       
handler.customPrefix = /^(anjing|anjj|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh)/i
handler.command = new RegExp
module.exports = handler
