//JANGAN DI HAPUS YA

//BASE BARU NIH
//CREATOR BASE : Mau Gaming
//KLO MAU RECODE / EDIT KASIH NAMA CREATOR ASLI NYA
//HARGAI PEMBUAT BASE YA

//JANGAN LUPA FOLLOW
//ALL SOSIAL MEDIAKU

//INSTAGRAM : @Zero_YT7
//YOUTUBE : ZeroYT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

//THANKS UDAH MAKE BASE INI


var {
WAConnection,
MessageType,
ChatModification,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var translate = require('@vitalets/google-translate-api')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var { y2mateA, y2mateV } = require('../mess/y2mate')
var { herolist } = require('../mess/herolist')
var { herodetails } = require('../mess/herodetail')
var Exif = require('../mess/exif')
var { uploadimg, upload } = require('../mess/uploadimg')
var { wikiSearch } = require('../mess/wiki')
var { mediafireDl } = require('../mess/mediafire')
var { lirikLagu } = require('../mess/lirik.js')
var { webp2mp4File } = require('../mess/webp2mp4')
var exif = new Exif()
var request = require('request')
var Math_js = require('mathjs')
var fs = require('fs')
var hx = require('hxz-api')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ggs = require('google-it')
var googleImage = require('g-i-s')
var yts = require( 'yt-search')
var ytsd = require('ytsr')
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var simple = require('../mess/simple.js')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©Created By SiFz'
blocked = []
multi =false
offline = false
nopref = false
allpref = true
simple != false

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var mute = JSON.parse(fs.readFileSync('./storage/mute.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var imagi = JSON.parse(fs.readFileSync('./storage/imagi.json'))
var setik = JSON.parse(fs.readFileSync('./storage/setik.json'))
var vien = JSON.parse(fs.readFileSync('./storage/vien.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = ["6285866295942@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isMuted = isGroup ? mute.includes(from) : false
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe Mau Gaming',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
owner: 'Khusus Owner Bot',
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe Mau Gaming`, 
orderTitle: `Subscribe Mau Gaming`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await zero.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NameBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            var hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await zero.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     
if (isMuted){
            if (!isGroupAdmins && !isOwner && !zer.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                              
case 'allmenu':
case 'help':
case 'o':
                          res = await zero.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 INFO USER 」',
"description": `Nama : ${pushname}
Nomer : @${sender.split('@')[0]}

「 INFO BOT 」
🎃Creator Bot : '©Created By SiFz'
🌐 Prefix :  ⌜  ${prefix}  ⌟
🍬 Name Bot : ${NameBot}
☕ Runtime : ${runtime(process.uptime())}
📌 Speed : ${latensyi.toFixed(4)} Second
👥 Lib : Baileys 
🎈 Type : NodeJS

TIME ZONE
${wib} WIB
${wita} WITA
${wit} WIT`,
"buttonText": "𝐌𝐄𝐍𝐔",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${hari} - ${tanggal} - ${bulan} - ${tahun}`,
    "rows": [ 
       {
           "title": "🤡Owner Menu🤡",
           "rowId": `ownermenu`
           },
	       {
           "title": "⬇️Download Menu⬇️",
           "rowId": `downloadmenu`
           },
	       {
           "title": "😐Group Menu😐",
           "rowId": `groupmenu`
           },
	       {
	       "title": "🤘Tools Menu🤘",
           "rowId": `toolsmenu`
           },
           {
	       "title": "😊Storage Menu😊",
           "rowId": `storagemenu`
           },
           {
           "title": "😂Fun Menu😂",
           "rowId": `funmenu`
           },
           {
           "title": "🐤Ephoto Menu🐤",
           "rowId": `ephotomenu`
           },
           {
	       "title": "🤠Maker Menu🤠",
           "rowId": `makermenu`
           },
           {
           "title": "🦊Script Bot🦊",
           "rowId": `sc`
           },
           {
           "title": "All Menu",
           "rowId": `allmenu`
           },
           {
           "title": "😗Owner Bot😗",
           "rowId": `owner`
           },
	       {
           "title": "😸Info Bot😸",
           "rowId": `infobot`
           },
           {
           "title": "😈Gacha Cecan😈",
           "rowId": `gachacecan`
           },
           {
           "title": "😈Asupan Menu😈",
           "rowId": `asupanmenu`
           },
           {
           "title": "🌸Wibu menu🌸",
           "rowId": `wibumenu`
           },
           {
           "title": "S&K",
           "rowId": `s&k`
           }
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 zero.relayWAMessage(res)
 break
 case 'ownermenu':
 menu = `❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
 ➤ ${prefix}delchat
 ➤ ${prefix}mute
 ➤ ${prefix}unmute
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed`
 but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'downloadmenu':
menu = `❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}igdl [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'wibumenu':       
case '🌸':
menu =` *${ucapanWaktu}*, *${pushname}* 👋🏻`

               buttons =  [
    {buttonId: `menu`, buttonText: {displayText: 'Back To Menu'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},
]
               locatione = (await zero.prepareMessageFromContent(from, {"locationMessage": { "degreesLatitude": 0, "degreesLongitude": 0}}, {thumbnail:fs.readFileSync('./img/zero.jpg')})).message.locationMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `*── 「 WEEABOO 🌸 」 ──*

 ◉ ${prefix}ppcp
 ◉ ${prefix}loli
 ◉ ${prefix}lolivideo
 ◉ ${prefix}husbu
 ◉ ${prefix}waifu
 ◉ ${prefix}milf
 ◉ ${prefix}neko
 ◉ ${prefix}kanna
 ◉ ${prefix}sagiri
 ◉ ${prefix}cosplay
 ◉ ${prefix}wallnime
 ◉ ${prefix}kusonime
 ◉ ${prefix}megumin
 ◉ ${prefix}storyanime


◪ Runtime : ${runtime(process.uptime())} 
◪  妹Yui-Chan@^3.0.0`, locationMessage: locatione,
               buttons: buttons,
               headerType: 6
}


               prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285878313791@g.us" }: {})},message:{"orderMessage":{"orderId":"6285878313791","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
              zero.relayWAMessage(prep)
               break
case 'groupmenu':
menu =`❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _on / off_ ]
➤ ${prefix}antivirtex [ _on / off_ ]
➤ ${prefix}welcome [ _on / off_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'toolsmenu':
menu = `❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}toimg`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'storagemenu':
menu =`❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'funmenu':
menu =`❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'ephotomenu':
menu =`❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}luxurygold [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}multicolor3d [ _teks_ ]
➤ ${prefix}wetglass [ _teks_ ]
➤ ${prefix}galaxywallpaper [ _teks_ ]
➤ ${prefix}lighttext [ _teks_ ]
➤ ${prefix}beautifulflower [ _teks_ ]
➤ ${prefix}puppycute [ _teks_ ]
➤ ${prefix}royaltext [ _teks_ ]
➤ ${prefix}heartshaped [ _teks_ ]
➤ ${prefix}birthdaycake [ _teks_ ]
➤ ${prefix}galaxystyle [ _teks_ ]
➤ ${prefix}hologram3d [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}glossychrome [ _teks_ ]
➤ ${prefix}greenbush [ _teks_ ]
➤ ${prefix}metallogo [ _teks_ ]
➤ ${prefix}noeltext [ _teks_ ]
➤ ${prefix}glittergold [ _teks_ ]
➤ ${prefix}textcake [ _teks_ ]
➤ ${prefix}starsnight [ _teks_ ]
➤ ${prefix}wooden3d [ _teks_ ]
➤ ${prefix}textbyname [ _teks_ ]
➤ ${prefix}writegalaxy [ _teks_ ]
➤ ${prefix}snow3d [ _teks_ ]
➤ ${prefix}birthdayday [ _teks_ ]
➤ ${prefix}goldplaybutton [ _teks_ ]
➤ ${prefix}silverplaybutton [ _teks_ ]
➤ ${prefix}freefire [ _teks_ ]
➤ ${prefix}cartoongravity [ _teks_ ]
➤ ${prefix}anonymhacker [ _teks_ ]
➤ ${prefix}mlwall [ _teks_ ]
➤ ${prefix}pubgmaskot [ _teks_ ]
➤ ${prefix}aovwall [ _teks_ ]
➤ ${prefix}logogaming [ _teks_ ]
➤ ${prefix}fpslogo [ _teks_ ]
➤ ${prefix}avatarlolnew [ _teks_ ]
➤ ${prefix}lolbanner [ _teks_ ]
➤ ${prefix}avatardota [ _teks_ ]
➤ ${prefix}juventusshirt [ _teks_ ]
➤ ${prefix}cutegravity [ _teks_ ]
➤ ${prefix}realvintage [ _teks_ ]
➤ ${prefix}codwarzone [ _teks_ ]
➤ ${prefix}valorantbanner [ _teks_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'makermenu':
menu =`❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}blackpink [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'asupanmenu':
menu =`❏ 「 \`\`\`ASUPAN MENU\`\`\` 」

➤ ${prefix}asupan
➤ ${prefix}asupancecan
➤ ${prefix}asupanhijaber
➤ ${prefix}asupansantuy
➤ ${prefix}asupanukhti
➤ ${prefix}asupanbocil
➤ ${prefix}asupanghea
➤ ${prefix}asupanrika`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break
case 'gachacecan':
menu = `❏ 「 \`\`\`GACHA CECAN MENU\`\`\` 」

➤ ${prefix}vietnam
➤ ${prefix}korea
➤ ${prefix}china
➤ ${prefix}indonesia
➤ ${prefix}malaysia
➤ ${prefix}japan
➤ ${prefix}thailand`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break

case 'menu':
case 'p':
menu =`Nama : ${pushname}
Nomer : @${sender.split('@')[0]}

「 INFO BOT 」
🎃Creator Bot : '©Created By SiFz'
🌐 Prefix :  ⌜  ${prefix}  ⌟
🍬 Name Bot : ${NameBot}
☕ Runtime : ${runtime(process.uptime())}
📌 Speed : ${latensyi.toFixed(4)} Second
👥 Lib : Baileys 
🎈 Type : NodeJS

TIME ZONE
${wib} WIB
${wita} WITA
${wit} WIT

❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
 ➤ ${prefix}delchat
 ➤ ${prefix}mute
 ➤ ${prefix}unmute
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed
 
 ❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]

❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _on / off_ ]
➤ ${prefix}antivirtex [ _on / off_ ]
➤ ${prefix}welcome [ _on / off_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]

❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}toimg

❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]

❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]

❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}luxurygold [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}multicolor3d [ _teks_ ]
➤ ${prefix}wetglass [ _teks_ ]
➤ ${prefix}galaxywallpaper [ _teks_ ]
➤ ${prefix}lighttext [ _teks_ ]
➤ ${prefix}beautifulflower [ _teks_ ]
➤ ${prefix}puppycute [ _teks_ ]
➤ ${prefix}royaltext [ _teks_ ]
➤ ${prefix}heartshaped [ _teks_ ]
➤ ${prefix}birthdaycake [ _teks_ ]
➤ ${prefix}galaxystyle [ _teks_ ]
➤ ${prefix}hologram3d [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}glossychrome [ _teks_ ]
➤ ${prefix}greenbush [ _teks_ ]
➤ ${prefix}metallogo [ _teks_ ]
➤ ${prefix}noeltext [ _teks_ ]
➤ ${prefix}glittergold [ _teks_ ]
➤ ${prefix}textcake [ _teks_ ]
➤ ${prefix}starsnight [ _teks_ ]
➤ ${prefix}wooden3d [ _teks_ ]
➤ ${prefix}textbyname [ _teks_ ]
➤ ${prefix}writegalaxy [ _teks_ ]
➤ ${prefix}snow3d [ _teks_ ]
➤ ${prefix}birthdayday [ _teks_ ]
➤ ${prefix}goldplaybutton [ _teks_ ]
➤ ${prefix}silverplaybutton [ _teks_ ]
➤ ${prefix}freefire [ _teks_ ]
➤ ${prefix}cartoongravity [ _teks_ ]
➤ ${prefix}anonymhacker [ _teks_ ]
➤ ${prefix}mlwall [ _teks_ ]
➤ ${prefix}pubgmaskot [ _teks_ ]
➤ ${prefix}aovwall [ _teks_ ]
➤ ${prefix}logogaming [ _teks_ ]
➤ ${prefix}fpslogo [ _teks_ ]
➤ ${prefix}avatarlolnew [ _teks_ ]
➤ ${prefix}lolbanner [ _teks_ ]
➤ ${prefix}avatardota [ _teks_ ]
➤ ${prefix}juventusshirt [ _teks_ ]
➤ ${prefix}cutegravity [ _teks_ ]
➤ ${prefix}realvintage [ _teks_ ]
➤ ${prefix}codwarzone [ _teks_ ]
➤ ${prefix}valorantbanner [ _teks_ ]

❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}blackpink [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]

❏ 「 \`\`\`ASUPAN MENU\`\`\` 」

➤ ${prefix}asupan
➤ ${prefix}asupancecan
➤ ${prefix}asupanhijaber
➤ ${prefix}asupansantuy
➤ ${prefix}asupanukhti
➤ ${prefix}asupanbocil
➤ ${prefix}asupanghea
➤ ${prefix}asupanrika

❏ 「 \`\`\`GACHA CECAN MENU\`\`\` 」

➤ ${prefix}vietnam
➤ ${prefix}korea
➤ ${prefix}china
➤ ${prefix}indonesia
➤ ${prefix}malaysia
➤ ${prefix}japan
➤ ${prefix}thailand`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©Created By SiFz", fakeimg, but, zer)
break

case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By SiFz',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝??\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break
///ANIME
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://zenzapi.xyz/api/random/couples?apikey=f4b59570c3`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `ppcp`,buttonText:{displayText: ` ◉ NEXT`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Pjnya🐣', imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `ppcp`,buttonText:{displayText: ` ◉ NEXT`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Pjnya🐣', imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
             setTimeout( async () => {
 zero.relayWAMessage(prep)
}, 5000)
break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await zero.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Tetaplah Bahagia', imageMessage: imageMsg,
              contentText:`YT LeonGanz`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
                     case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KontoleBaperan`)
              buttons = [{buttonId: `${command}`,buttonText:{displayText: `⬡ NEXT`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'妹Yui-Chan@^3.0.0', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
    
              break
       case 'nakanoitsuki':
       case 'nakanomiku':
       case 'nakano':
              res = await axios.get(`https://zenzapi.xyz/api/pinterest?query=${command}&apikey=f4b59570c3`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: ftrol, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
              case 'storyanime':
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=KontoleBaperan`)
              buffer = await getBuffer(anu.result)
              zero.sendMessage(from, buffer, video, { quoted: ftrol })
              break
              case 'kurumi':
    case 'deku':
    case 'sao':
    case 'chika':
    case 'kurumi':
    case 'kaneki':
    case 'touka':
    case 'eren':
    case 'naruto':
    case 'minato':
    case 'sagiri':
    case 'sasuke':
    case 'sakura':
    case 'tsunade':
    case 'gojosatoru':
        anu = await fetchJson(`https://zenzapi.xyz/api/pinterest?query=${command}&apikey=f4b59570c3`, {method: 'get'})
        ngebuff = await getBuffer(anu.image)
        zero.sendMessage(from, ngebuff, image, { quoted: ftrol })
        break
        case 'kusonime':
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=KontoleBaperan&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await zero.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
             break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Mau Gaming`)
fs.unlinkSync(ran)
})
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6283856223089@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://www.youtube.com/channel/UCu3cFVCT9rHD1spardoP93g`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/drak_ipul123`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@raraharsita2`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = `[ 𝗜𝗡𝗙𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧 ]
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐒𝐜𝐫𝐢𝐩𝐭 : SiFz + ZEROYT07
𝐋𝐢𝐧𝐤 𝐒𝐜𝐫𝐢𝐩𝐭 : https://www.youtube.com/channel/UCu3cFVCT9rHD1spardoP93g`
zero.sendMessage(from, teks, text, {quoted : zer})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
 case 'delchat':
                   if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                zero.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    zero.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				return zero.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				                    case 'exif':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'setprofile':
				case 'setppbot':
				zero.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await zero.downloadAndSaveMediaMessage(enmediau)
					await zero.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                zero.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (q === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
					}
					break
					case 'setbio':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					zero.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				zero.updatePresence(from, Presence.composing)
				zero.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return ephe('Link nya mana?')
					zero.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'readall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await zero.sendMessage(from, teks, text, {quoted: ftrol})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await zero.sendMessage(from, teks, text, {quoted: ftrol})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'infogempa':
              anu = await fetchJson(`https://zenzapi.xyz/api/bmkg/gempa?apikey=f4b59570c3`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
					break 
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : LeonGanz
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7 (Creator Base)*
*┃◗ Thank To Putri.Zizah
*┃◗ Thanks To All Subscriberku*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `script`, buttonText: { displayText: '📌 SCRIPT' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftrol, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
                                    case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftrol, caption: result}).catch(e => {
  reply(result)
})
break
 case 'mediafire':
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` MEDIAFIRE DOWNLOAD

Data Berhasil Didapatkan!

📌 Nama : ${res[0].nama}
✉️ Ukuran : ${res[0].size}
?? Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
									break
									case 'ytsearch':
                if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*🔖 YOUTUBE SEARCH*
*🔖 Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*🔖 Judul:* ${items[i].title}
*🔖 Id:* ${items[i].id}
*🔖 Ditonton:* ${items[i].views}
*🔖 Durasi:* ${items[i].duration}
*🔖 Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await zero.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
*🔖 DOWNLOAD*
🔖 ${prefix}ytmp3 [link yt] = Audio
🔖 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"🔖YOUTUBE SEARCH",mediaType:"2",thumbnail:fakethumb,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
            case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey1}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zero.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zero.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'ytmp3':
if (args.length === 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Eror')
var srch = args.join(' ')
try {
yta(srch)
.then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply('Terjadi kesalahan')
}
break
 case 'ytmp4':
              if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: zer, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: zer, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zer, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'tinyurl':
           try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
 case 'get':
case 'fetch':
if(!q) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_Url = args[0]
                    ini_Url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=KontoleBaperan&url=${ini_url}`)
                    ini_Url = ini_Url.result
                    ini_type = image
                    if (ini_Url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await zero.sendMessage(from, ini_buffer, ini_type, { quoted: ftrol })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=KontoleBaperan&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await lolhuman.sendMessage(from, ini_buffer, ini_type, { quoted: lol })
                    }
                    break
                    case 'tiktokdl':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=KontoleBaperan&url=${q}`)
              result = `*Nickname*: ${data.result.author.nickname}\n *Like*: ${data.result.statistic.diggCount}\n*Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `buttons3 ${q}`,buttonText:{displayText: `Video`},type:1},{buttonId:`buttons4 ${q}`,buttonText:{displayText:'Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await zero.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
			  zero.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: ftrol, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: ftrol, mimetype: 'video/mp4', filename: res[0].output})
              break
          case 'buttons3': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=KontoleBaperan&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              zero.sendMessage(from, ini_video, video, { quoted: ftrol })
              break
          case 'buttons4': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=KontoleBaperan&url=${args[0]}`)
              zero.sendMessage(from, data, audio, { quoted: ftrol })
              break
          case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
              zero.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
              zero.relayWAMessage(prep)
              break
case 'tourl':
    if ((isMedia && !zer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'resepmasakan':
              if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${apikey7}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: hasilresep})
					break 
					case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://zenzapi.xyz/api/artimimpi?query=${body.slice(11)}&apikey=f4b59570c3`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'bilangangka':
              if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${apikey7}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'kalkulator':
 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'fancytext':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'githubstalk':
              if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${apikey7}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: gstalk})
					break 
					case 'translate':
				case 'ts':
try{
					if ( args.length === 1 ){
						tekss = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
				case 'playstore':
      if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
              case 'brainly':
  if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					zero.sendMessage(from, teks, text,{quoted:ftrol,detectLinks: false})                        
		            })              
					break
					case 'igstory': 
  if(!q) return reply('Usernamenya?')
            hx.igstory(`${q}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,video,{quoted: ftrol,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,image,{quoted: ftrol,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
            case 'igstalk':
try{
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${q}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*
\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
zero.sendMessage(from, nih_buff, image, { quoted: ftrol, caption: tt });
}
break
case 'twmp4': case 'twitter':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fakethumb
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
zero.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:ftrol, ptt:true})
})
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
   if(!q) return reply('cari group apa?')
            hx.linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
            case 'chara':
		if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${q}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await zero.sendMessage(from,li,image,{quoted: ftrol})
            break
            case 'otaku':
        if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${q}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            zero.sendMessage(from,ram,image,{quoted:ftrol,caption:rem})
            break
            case 'komiku':
    if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${q}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
            case 'getpict':
				case 'getpic':
              if (!isGroup) return reply(mess.only.group)
            mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await zero.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            zero.sendMessage(from, pict, image, {quoted: ftrol})
            break
            case 'getbio':
            var yy = zer.message.extendedTextMessage.contextInfo.participant
var p = await zero.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'creategrup':
              if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					zero.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = zer.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
zero.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await zero.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await zero.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				zero.sendMessage(from, buffer, image, {quoted: ftrol})
		} else {
		}
			  break
			case 'getdeskgc':
              if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await zero.groupMetadata(anu)
				zero.sendMessage(from, metadete.desc, text, {quoted:ftrol})
				  break
				case 'sider':
              if (!isGroup) return reply(mess.only.group)
infom = await zero.messageInfo(from, zer.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'hacked':
                 if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.bodmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   zero.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                zero.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                zero.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                zero.sendMessage(from, 'Succes Hacked', text, {quoted: ftrol})
					break
					case 'fitnahpc':
              if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    zero.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
					case 'kontak':
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (zer.message.extendedTextMessage != undefined){
                    		mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'resetlinkgroup':
         case 'revoke':
                if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.bodmin)
          json = ['action', 'inviteReset', from]
         zero.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
         case 'sticktag':
              if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await zero.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./sticker/${wanu[1]}.webp`)
				zero.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'totag':
              if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'stickerwm':
					case 'swm':
              if (isMedia && !zer.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'takestick':
					case 'take':
              if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
						case 'dadu':
      random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			zero.sendMessage(from, damdu, sticker, {quoted: ftrol})
			break
			case 'tomp3':
              zero.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await zero.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						zero.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: ftrol })
						fs.unlinkSync(ran)
					})
					break
					case 'tomp4':
              if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'robot':
              encmedial = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await zero.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'balik':
              encmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await zero.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              encmediao = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await zero.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
              encmediaz = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await zero.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:ftrol})
						fs.unlinkSync(ran)
					})
					break
					case 'detikvn':
              encmediam = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await zero.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftrol})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
            encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await zero.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						zero.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftrol})
						fs.unlinkSync(median)
				break
			case 'listimage':
              teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagi } })
					break
					case 'stickerlist':
				case 'liststicker':
              teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setik } })
					break
					case 'vnlist':
				case 'listvn':
              teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": vien } })
					break
					case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./sticker/${nm}.webp`, delb)
					fs.writeFileSync('./storage/setik.json', JSON.stringify(setik))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: ftrol })
					break
					case 'delsticker':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addvn':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./vn/${nm}.mp3`, delb)
					fs.writeFileSync('./storage/vien.json', JSON.stringify(vien))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: ftrol })
					break
					case 'delvn':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addimage':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/${nm}.jpg`, delb)
					fs.writeFileSync('./storage/imagi.json', JSON.stringify(imagi))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: ftrol })
					break
					case 'delimage':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'rate':
  rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
					break
					case 'kapankah':
  kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
					break
					case 'apakah':
 apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
					break
					case 'bisakah':
  bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
					break
					case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await zero.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
zero.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
 case 'slot':
            case 'slots':
                const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            zero.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftrol })
            break
            case 'suit':
                if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 's&k':
rules = `*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
var ZeroYT7 = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: `©Created By SiFz`,
           jpegThumbnail: fakethumb,
           mimetype: 'image/jpeg',
           }
           }
           }
           } 
           zero.sendMessage(from, rules, MessageType.text, ZeroYT7)
           break 
case 'tag':
              if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					zero.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
          var nomqm = zer.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					zero.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
					case 'readmore':
			    	case 'more':
              const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(mess.error.api)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                 case 'pantun':
              anu = await fetchJson(`https://zenzapi.xyz/api/pantun?apikey=f4b59570c3`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'tospam':
              if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zero.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await zero.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await zero.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
	delb = await zero.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zero.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} SiFz`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${bo}`)
zero.sendMessage(from, anu, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Mau Gaming' })
break
case 'hartatahta':
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana\nContoh : ${prefix + command} SiFz`)
bo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text=${bo}`)
zero.sendMessage(from, res, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Mau Gaming' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Mau Gaming`)
txt1 = args[0]
txt2 = args[0]
reply(mess.wait)
wll = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text1=${txt1}&text2=${txt2}`)
zero.sendMessage(from, wll, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Mau Gaming' })
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'magma':
case 'impressiveglitch':
case 'harrypotter':
case 'foggywindow':
case 'watercolor':
case 'wonderfulgraffiti':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Mau Gaming`)
bo = args.join(" ")
reply(mess.wait)
blck = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey1}&text=${bo}`)
zero.sendMessage(from, blck, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Mau Gaming' })
break
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=xZiyy&url=${ini_url}`).then((hasil) => {
zero.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `Done Jangan Lupa Subscribe Mau Gaming`, quoted : ftrol})
})
break
case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Mau Gaming'})
break
case 'vietnam':
case 'korea':
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'thailand':
reply(mess.wait)
ini_result = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${apikey5}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result.url)
zero.sendMessage(from, ini_img, image, {quoted:ftrol})
break
        
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}
