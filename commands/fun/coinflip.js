const Discord = require("discord.js");

module.exports = {
    name: 'coinflip',
    description: "flips a coin",
    execute(message, args, client){
        
        const hoptions = ['heads', 'tails']
        const computerchoice = hoptions[Math.floor(Math.random() * 2)];
        var embed = new Discord.RichEmbed()
            .setTitle('Result:' + ' ' + computerchoice + '!')
            
            .setColor('#ecb5ff')
            .setFooter('Carbanaro')
            .setThumbnail('https://armstrongmedia.s3.amazonaws.com/wp-content/uploads/2017/06/US-coin-Spin.gif')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}