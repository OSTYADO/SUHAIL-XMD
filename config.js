const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_33_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY1Q2NVZCSklvTmkyZXEreTF1MlY2TGo5ZFI1TEdDdEhtT2NWSTRORVB3ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODEyMDc4MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFODhFNjlBMzZFQ0NFNzA1OEMwNjQ1MjQ2ODY0REZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzgzNDAxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4MTIwNzgyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjgwM0ZFMUFFNkQ5MjcyQzQ1RTIzRTA5QzA1RUFFQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODM0MDE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFkLWZOV2NxUmZPejgwT3ltMExGbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ4ZTBiMDYtMjNhYS00YWI5LThiZTctMTc4MmRjMjQ5OTQ4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNTcsXG4gICAgICAyNDYsXG4gICAgICA2NixcbiAgICAgIDI0NSxcbiAgICAgIDE5MSxcbiAgICAgIDIzMSxcbiAgICAgIDEyMCxcbiAgICAgIDg4LFxuICAgICAgOTUsXG4gICAgICA1LFxuICAgICAgMjI1LFxuICAgICAgMjM0LFxuICAgICAgNjAsXG4gICAgICAxODgsXG4gICAgICAxNDMsXG4gICAgICAxMzYsXG4gICAgICAxNzAsXG4gICAgICAyMDcsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgODIsXG4gICAgICAxNTksXG4gICAgICAyMzUsXG4gICAgICA4MyxcbiAgICAgIDIxMyxcbiAgICAgIDc1LFxuICAgICAgNTIsXG4gICAgICAxMTgsXG4gICAgICAyMTksXG4gICAgICAyMDYsXG4gICAgICA4NixcbiAgICAgIDE4NSxcbiAgICAgIDE3MSxcbiAgICAgIDEsXG4gICAgICAxNjksXG4gICAgICAyMTMsXG4gICAgICA0NCxcbiAgICAgIDE2MyxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUUdDMzM1OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzgxMjA3ODIyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjExOTU4MjcyMDI0NzoyM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLEkOKCrDTFgcWmICDCtlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svcXdyMENFSmJxNExvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMzk3b2lYY2syQXR1L0pSWGFBOTJuL0Y5WGtWQlovZWRINnc2YXloRWVSOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1ODJDSENzamc2SERFWWVYb2hDK2UvcWYvNUlyV1lpMngrRWNJRXV3VmlFYjlwVkFQamdNcko5SnF4TFRvNzRBUXFVZ1FlWVlPNVd4cWhPeUdpaFNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJadjFDendzbTJmSE9hUmdNT3FtL2NWMHl1QUlxN0x4MU1SRjhoYk8xVnd2VU1NTFhwTjV5QVNMNTEyUjQ2WERzSzJRZjVYZlZjQjRtcFNjOVVlYU9qUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODEyMDc4MjI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4MzQwMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYdi5qc29uIjogIntcImtleURhdGFcIjpcImVvWmg5alYvZUV0ZUNWN2Q0UUhWTTQ5Vjdoa1FGcWZ1NGhoVkU2U096eDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY1ODkyMTQzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
