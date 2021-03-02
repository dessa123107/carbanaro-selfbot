const Discord = require("discord.js");
const fs = require('fs');
module.exports = {
 name: 'uwu',
 description: "changes text to uwu style",
 async execute(message, args, client){
 
 const input = args.slice(0).join(" ")
 
 
 
 let r = await input.replace(/r/g,'w');
 let r2 = await r.replace(/R/g,'W');
 let r3 = await r2.replace(/l/g,'w');
 let r4 = await r3.replace(/L/g,'W');
 let r5 = await r4.replace(/ove/g,'uv');
 let uwu = await r5.replace(/OVE/g,'UV');
 
 

 
 
 message.edit(uwu);
 
 
 }
 
}