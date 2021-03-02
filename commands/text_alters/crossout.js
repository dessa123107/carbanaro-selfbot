const Discord = require("discord.js");
const fs = require('fs');
module.exports = {
    name: 'crossout',
    description: "changes text to crossed out",
    async execute(message, args, client){
        
        const cromsg = args.slice(0).join(" ")

        message.edit('~~' + cromsg + '~~')
            
        

        
        
        
  
        
    }
    
}