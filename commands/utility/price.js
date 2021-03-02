const Discord = require("discord.js");

module.exports = {
    name: 'price',
    description: "sends price of bot",
    execute(message, args, client){
        
        const pricemsg = 
`Current price for Carbanaro Selfbot:

__Bitcoin__
5$ for full bot liscense


__Cashapp__
5$ for full bot liscense


__Paypal__
8$ for full bot liscense


Prices are non-negotiable. no refunds provided.`

        var embed = new Discord.RichEmbed()
            .setDescription('**' + pricemsg + '**')
            
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png', ".")
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}