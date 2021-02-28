const Discord = require("discord.js");

module.exports = {
    name: 'announce',
    description: "sends message with a ping",
    execute(message, args, client){
        const codemsg = args.slice(0).join(" ")
        if(!args[0]){
            const embedn = new Discord.RichEmbed()

            .setDescription('Please specify what you want to announce/ping')
            
            .setColor('#fffa00')
            .setFooter('Carbanaro')   
            
                message.edit(embedn)
                return;
        }
        
        message.edit(codemsg + `
        
        
||@everyone||`)
            
        }
    
}
