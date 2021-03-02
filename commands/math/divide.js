const Discord = require("discord.js");

module.exports = {
    name: 'divide',
    description: "divides the second number from the first one.",
    execute(message, args, client){
       
        var firstnum = args[0]
        var secondnum = args[1]

        if(isNaN(args[0])){
            var embed = new Discord.RichEmbed()
            .setTitle('Error!')
        .setDescription(`Hmm to my knowledge, **${firstnum}** is not a number.`)
    
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        } if(isNaN(args[1])){
            var embed = new Discord.RichEmbed()
            .setTitle('Error!')
        .setDescription(`Hmm to my knowledge, **${secondnum}** is not a number.`)
    
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        }
        var embed = new Discord.RichEmbed()
            .setTitle('Math Assistant')
        .setDescription(Number(firstnum) / Number(secondnum))
    
            .setColor('#db1dc0')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        
                 
                 
        
    }
} 