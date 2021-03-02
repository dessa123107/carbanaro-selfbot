const Discord = require("discord.js");

module.exports = {
    name: 'akst',
    description: "sends time in akst",
    execute(message, args, client){
        
        var date = new Date();
var utcDate = new Date(date.toUTCString());
utcDate.setHours(utcDate.getHours()-16);
var usDate = new Date(utcDate);

        var embed = new Discord.RichEmbed()
        .setDescription('**' +  usDate.toString().replace("(Eastern Standard Time)","(Alaska Standard Time)") + '**')
            
            
            
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}