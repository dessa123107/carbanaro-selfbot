const Discord = require("discord.js");

module.exports = {
    name: 'mst',
    description: "sends time in mst",
    execute(message, args, client){
        
        var date = new Date();
var utcDate = new Date(date.toUTCString());
utcDate.setHours(utcDate.getHours()-14);
var usDate = new Date(utcDate);

        var embed = new Discord.RichEmbed()
        .setDescription('**' +  usDate.toString().replace("(Eastern Standard Time)","(Mountain Standard Time)") + '**')
            
            
            
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}