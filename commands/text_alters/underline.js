const Discord = require("discord.js");
const fs = require('fs');
module.exports = {
    name: 'underline',
    description: "changes text to underlined",
    async execute(message, args, client){
        
        const undmsg = args.slice(0).join(" ")

        message.edit('__' + undmsg + '__')
            
        

        
        
        
  
        
    }
    
}