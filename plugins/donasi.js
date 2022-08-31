let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkom1 [085380166282]
│ • Telkom2  [085295374964]
│ • Dana  [085380166282]
│ • Saweria  [https://saweria.co/kahfiaja]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? wa.me//6285380166282
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
