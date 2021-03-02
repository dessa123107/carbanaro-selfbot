const Discord = require("discord.js");

module.exports = {
    name: 'pst',
    description: "sends time in pst",
    execute(message, args, client){
        
        
        var date = new Date();
        var utcDate = new Date(date.toUTCString());
utcDate.setHours(utcDate.getHours()-15);

var usDate = new Date(utcDate.getTime());



        var embed = new Discord.RichEmbed()
            .setDescription('**' +  usDate.toString().replace("(Eastern Standard Time)","(Pacific Standard Time)") + '**')
            
            
            
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}