const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_03_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktQR2trdkErRUtmcFV6dDVVUktpSTlqelVvNm5HdWdaZW91eURPSnlyQTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjIxbVdJMTFiUUthYUhCdUFVOFBoYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTVhYjZkM2QtMWM2ZC00ZjlhLWE3N2UtMzBmN2YwNmM5ODI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDIyOSxcbiAgICAgIDMsXG4gICAgICA0NyxcbiAgICAgIDExMCxcbiAgICAgIDEyNyxcbiAgICAgIDI1MixcbiAgICAgIDM2LFxuICAgICAgMjUsXG4gICAgICAxNTIsXG4gICAgICA5MCxcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgOTYsXG4gICAgICAxODUsXG4gICAgICAyNTUsXG4gICAgICAxNzIsXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTYzLFxuICAgICAgNzMsXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICAxNjMsXG4gICAgICAxNyxcbiAgICAgIDE2OCxcbiAgICAgIDE1MSxcbiAgICAgIDEyNyxcbiAgICAgIDIzNCxcbiAgICAgIDE4OSxcbiAgICAgIDI0MyxcbiAgICAgIDIwNCxcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgOSxcbiAgICAgIDUwLFxuICAgICAgMjUyLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pac1pRREVNeU9wYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLdHRzL0Fmd3JzS0ZQa3N6ZzdUcVp3TjFlbExOdnJnYldhYVdDeGh3cm1NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlllZ3JTZHJoTHRHU3M2ZFAxNUdKdVB4OEk5YjdVQzNQUmJaeVRyUkgyWVgxZGk2M0VyWmtCNVl2ZEE1RkUvdGV0ak05Um13ZkpRaVdUWFl0UklwYkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJVTW9aQ3E2UDR5N0k5OUd5eGZFY2JSQjl1MHd2eEFRTlhFeWpteHN6K0dldzN5T2w4MEt1ZDVMd0NoUnFpK0grZ2t2cVd3ZkFwQytKemM0WFlPSUJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNzA1MjMyNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbXwnZaU8J2WmPCdlorwnZaV8J2WjSDwnZW48J2WhvCdlonwnZaa8J2WkPCdloZcIixcbiAgICBcImxpZFwiOiBcIjE3NDE5OTk5Nzk5NzE3MjoxOEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDcwNTIzMjY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMzQxMzkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVZPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMVkxHR3NLVnM0MlFDMFRqS0hiZysrL1dYZE5RbUtJMjM0RWQ5UVZzV3VFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0ODA2MzY1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzMzQxNDAwNzIzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
