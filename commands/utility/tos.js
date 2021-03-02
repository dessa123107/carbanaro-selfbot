const Discord = require("discord.js");

module.exports = {
    name: 'tos',
    description: "sends tos of carbanaro",
    execute(message, args, client){
        
        const tosmsg = 
`Carbanaro Selfbot TOS [Terms of Service]

__By purchasing Carbanaro you agree to the following terms of service__

Carbanaro is for educational use and for harmless use __only__. 
Any abuse or illegal activity preformed using Carbanaro will result in a ban, and a revoke of license.
Sharing of the files is strictly prohibited, and will result in a ban and revoke of license.
We do not take responsibility for any actions or consquences caused by the use or abuse of the bot.
We do not side with discord's polocies nor do we enforce them.
Carbanaro gives zero refunds. 
__All payments are final__`

        var embed = new Discord.RichEmbed()
            .setDescription('**' + tosmsg + '**')
            
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png', ".")
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}