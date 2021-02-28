const Discord = require("discord.js");

module.exports = {
    name: 'pp',
    description: "sends pp size of the user",
    execute(message, args, client){
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
          } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
          } else {
            user = message.author;
          }
        
        const options = ['8D', '8=D', '8===D', '8====D', '8=========D', '8=================D', '8==D', '8=====D', '8=======D', '8===========D', '8==============D']

        const ppSize = options[Math.floor(Math.random() * 6)];


        var embed = new Discord.RichEmbed()
            .setDescription(`***${user}'s PP***`)
            .addField(`${ppSize}`, '\u200b')
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}