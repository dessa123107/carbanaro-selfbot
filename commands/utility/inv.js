const Discord = require("discord.js");

module.exports = {
    name: 'inv',
    description: "sends server inv",
    execute(message, args, client){
        
        const inv = 
`https://discord.gg/mEsNZMmMC2`

        var embed = new Discord.RichEmbed()
            .setDescription('**' + inv + '**')
            
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png', ".")
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}