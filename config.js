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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_37_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmwwd2twSWtUVXk0OWtiamRTOTBoOGZyaGR3Q2s0VXpVbGN0aU1aVXRNZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYyODI1MjQ1MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwOEUxMjExNDJBQzdFRjY1MjI2ODM3MzIwNEFDMDMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc3ODYzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnYzlxMW5RM1FhQ0hKcnJxaDR3WFV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzOTE0OGRlLWM4MTAtNGQ0Yy1hYTc5LTAxMzljOGEzMGYyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxMjEsXG4gICAgICAxNyxcbiAgICAgIDUyLFxuICAgICAgMTUwLFxuICAgICAgNTgsXG4gICAgICAxMTEsXG4gICAgICA1OSxcbiAgICAgIDg3LFxuICAgICAgMjU1LFxuICAgICAgMixcbiAgICAgIDk3LFxuICAgICAgMTg3LFxuICAgICAgNzEsXG4gICAgICAxMTAsXG4gICAgICA1MCxcbiAgICAgIDk0LFxuICAgICAgNDYsXG4gICAgICAyMDMsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxNzEsXG4gICAgICAxMjQsXG4gICAgICAyOCxcbiAgICAgIDI0NixcbiAgICAgIDE5NSxcbiAgICAgIDksXG4gICAgICAxMzgsXG4gICAgICAxMDgsXG4gICAgICA4OSxcbiAgICAgIDE1OSxcbiAgICAgIDI1LFxuICAgICAgMTA2LFxuICAgICAgMTkwLFxuICAgICAgMTQ2LFxuICAgICAgMjM4LFxuICAgICAgMjMxLFxuICAgICAgMjM4LFxuICAgICAgNzUsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDZXTjRZRkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjI4MjUyNDUxNTo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwNTY5ODU2MTc2MTYxOjUxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmqrwnZqv8J2arfCdmqvwnZqq8J2asPCdmq8g8J2avvCdmrXwnZqqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hQd2RRRkVNQ3c0N2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1b1NqbEFrdHVaK1VrbFA1bHZvNHFSVzg5OWszQloxUkFJNUxJUWFnVUVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm0rL252SFdEVGNKblBxWnlpVXlLMVZOb1hFQmU1RzcyUGJ1ZVZLTGRKeVVlalN4cVlBN2pUN0M0ZTNrbGJqa1V6bHdUc1J4VkhzTzZ3K245Ui8yREJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJYOEk5bFBtaXB2MTR6VUNNU254VVlCNFZsWWwxeERJY0JkUWI3NEtxa29DcmM4TThzZkE3S2JaL1NFZkE4dVNTNnNwWjlXRXFEUzJ2Y1UzelZ5WUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI4MjUyNDUxNTo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTc3ODYyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFUY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT0ZKTnJGUnQ5d1ZFc0ZrVXdwVU93blhMaHNaeFdUM1RNTFBzQ2lTQ01NST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE5NDEzMjEyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
