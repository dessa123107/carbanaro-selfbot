const Discord = require("discord.js");

module.exports = {
    name: 'code',
    description: "sends message in coding format",
    execute(message, args, client){
        
        const codemsg = args.slice(0).join(" ")

        message.edit('```' + codemsg + '```')
        
  
  
        
    }
}