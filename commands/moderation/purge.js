const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    description: "deletes messages in dm or channel",
    execute(message, args, client){
        
        

        var embed = new Discord.RichEmbed()
            .setDescription("You cannot purge 0 messages, or purge over 100!")
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 
                if (args[0] < 1 || args.length < 1){
                   message.edit(embed).then(message => message.delete(2000));
                   return;
                };
                let count = parseInt(args[0] || 1);
                message.channel.fetchMessages().then(async messages => {
                    let msg_array = messages.array();
                    msg_array = msg_array.filter(m => m.author.id === client.user.id);
                    msg_array.length = count + 1
                    msg_array.map(m => m.delete());
                    
                })
  
  
        
    }
}