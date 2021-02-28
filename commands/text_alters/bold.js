const Discord = require("discord.js");

module.exports = {
    name: 'bold',
    description: "sends message bolded",
    execute(message, args, client){
        
        const boldmsg = args.slice(0).join(" ")

        message.edit('**' + boldmsg + '**')
        
  
  
        
    }
}