const Discord = require("discord.js");

module.exports = {
    name: 'av',
    description: "sends the users avatar",
    execute(message, args, client){
        const user1 = message.mentions.users.first() || message.author; 
        
          
          let avatar = user1.avatarURL
          // 4096 is the new biggest size of the avatar.
          // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
          // If it's not animated, it will result as a normal image format.
          
          var embed = new Discord.RichEmbed()
          .setTitle(`***Avatar***`)
          .setDescription(`[](${avatar})`)
          .setColor('#c800ff')
          .setImage(avatar)
            message.edit(embed);
        }
}
