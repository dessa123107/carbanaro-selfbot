const Discord = require("discord.js");

module.exports = {
    name: 'poll',
    description: "sends check and x as poll",
    async execute(message, args, client){
        
        
        var pollmsg = args.slice(0).join(" ")


        var embed = new Discord.RichEmbed()
        .setTitle('**Poll**')
        .setDescription(pollmsg)
        .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")

        message.edit(embed)
        await message.react(`✅`)
        await message.react(`❌`)

        
        
  
  
        
    }
}