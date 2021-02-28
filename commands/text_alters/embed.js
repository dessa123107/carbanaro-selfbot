const Discord = require("discord.js");

module.exports = {
    name: 'embed',
    description: "sends message as an embed",
    execute(message, args, client){
        
        

        var embed = new Discord.RichEmbed()
            .setDescription(args.slice(0).join(" "))
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}










