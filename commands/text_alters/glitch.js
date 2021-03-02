

const Discord = require("discord.js");

module.exports = {
    name: 'glitch',
    description: "sends message glitched - deleted and resent",
    execute(message, args, client){
        
       const glitchmsg = args.slice(0).join(" ")
            
       message.edit(glitchmsg)
       message.channel.send(glitchmsg)
       let count = parseInt(1);
                message.channel.fetchMessages().then(async messages => {
                    let msg_array = messages.array();
                    msg_array = msg_array.filter(m => m.author.id === client.user.id);
                    msg_array.length = count;
                    msg_array.map(m => m.delete());
                })
       
        
     
            
        }
    
}