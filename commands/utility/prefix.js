const Discord = require("discord.js");
const fs = require('fs');
module.exports = {
    name: 'prefix',
    description: "changes prefix of bot",
    execute(message, args, client){
        
        const newprefix = args.slice(0).join(" ")

        fs.writeFile('prefix.txt', newprefix, function(){console.log('done')})
    

        
        
  
  
        
    }
}



