const Discord = require("discord.js");

module.exports = {
    name: 'italics',
    description: "sends message in italics",
    execute(message, args, client){
        
        const italicmsg = args.slice(0).join(" ")

        message.edit('*' + italicmsg + '*')
        
  
  
        
    }
}
