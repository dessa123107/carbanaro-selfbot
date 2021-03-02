const Discord = require("discord.js");

module.exports = {
    name: 'est',
    description: "sends time in est",
    execute(message, args, client){
        
        var date = new Date();
var utcDate = new Date(date.toUTCString());
utcDate.setHours(utcDate.getHours()-12);
var usDate = new Date(utcDate);

        var embed = new Discord.RichEmbed()
            .setDescription('**' + usDate + '**')
            
            
            
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}