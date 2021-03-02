const reversealphabet = '𝕫 𝕪 𝕩 𝕨 𝕧 𝕦 𝕥 𝕤 𝕣 𝕢 𝕡 𝕠 𝕟 𝕞 𝕝 𝕜 𝕛 𝕚 𝕙 𝕘 𝕗 𝕖 𝕕 𝕔 𝕓 𝕒'


const Discord = require("discord.js");

module.exports = {
    name: 'alphareverse',
    description: "sends alphabet in reverse",
    execute(message, args, client){
        
       
            var embed = new Discord.RichEmbed()

            .setDescription(reversealphabet)
            
            .setColor('#5eff74')
            .setFooter('Carbanaro')   
            
                message.edit(embed)
                return;
        
        
     
            
        }
    
}