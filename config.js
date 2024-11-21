const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254700639518";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_03_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFwVmtWNVhiamV1NUx3OEhETTdaWEVUSkFpUWdJbzRDT1N5b3pqME85S289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpjZDBzOHFkUllDUWtYb1dKTHNQeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzVjNTBjMTMtMmExOS00N2U5LWFkYWItZWZjMGVhNGFjYjBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDQxLFxuICAgICAgMTExLFxuICAgICAgMTkyLFxuICAgICAgMTg0LFxuICAgICAgMjQ3LFxuICAgICAgNjYsXG4gICAgICAxMzcsXG4gICAgICA5MSxcbiAgICAgIDExMixcbiAgICAgIDEwLFxuICAgICAgMixcbiAgICAgIDE5OCxcbiAgICAgIDEzLFxuICAgICAgNjcsXG4gICAgICAxMjUsXG4gICAgICA2NixcbiAgICAgIDEyMSxcbiAgICAgIDgyLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDE4NCxcbiAgICAgIDUwLFxuICAgICAgODksXG4gICAgICA4NyxcbiAgICAgIDE2MSxcbiAgICAgIDI0MixcbiAgICAgIDIwMyxcbiAgICAgIDc1LFxuICAgICAgNjcsXG4gICAgICAxMDksXG4gICAgICAxMDEsXG4gICAgICAzMyxcbiAgICAgIDIxMSxcbiAgICAgIDE2MixcbiAgICAgIDIyLFxuICAgICAgMjQzLFxuICAgICAgMjAyLFxuICAgICAgMTUxLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJKRUc4VEFMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDA2Mzk1MTg6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtM21+w7hqIVwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDc5MDE4MTY0Mzg3OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3TzUxOFE2dTc3dVFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTZQZUtOTzJVeFdOZ1Q4aTIvNzI2OWdWay9CK2RkU0JQcFJTdWcrRFdBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5Q25ROHNsK2FzaE9vL2RvS2ViS3RQbFZaTFQvQzZLL090ZEo5VTJKODlGazBQRFI0ZEFsNWtwRHkrbytLYmNkbzJGaWEvV3FHWUUxTnl0SUVLcHJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzQzdnaXdlNisvSSt1eCs1ODVLSnRXdzJ5dGlZemJtT3lTV1BDajF3R1puRng4Rjl2WXhiQktES0FUbkFlWVJyUGtXS01tYUtlSVh2djR3czJzK2ZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDA2Mzk1MTg6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxNzk4MjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
