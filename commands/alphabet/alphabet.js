const alphabet = '𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫'

const Discord = require("discord.js");

module.exports = {
    name: 'alpha',
    description: "sends alphabet",
    execute(message, args, client){
        
       
            var embed = new Discord.RichEmbed()

            .setDescription(alphabet)
            
            .setColor('#5efdff')
            .setFooter('Carbanaro')   
            
                message.edit(embed)
                return;
        
        
     
            
        }
    
}