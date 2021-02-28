const Discord = require("discord.js");

module.exports = {
    name: 'quickmsg',
    description: "sends a msg then deletes it.",
    execute(message, args, client){
        
        const fmsg = args.slice(0).join(" ")
        
        message.edit(fmsg)
                .then(msg => {
                    setTimeout(function() {
                        msg.delete()
                    }, 600)
        
                
  
  
                
        })
    }
    
    }
