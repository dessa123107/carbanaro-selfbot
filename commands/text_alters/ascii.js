const figlet = require('figlet');
const Discord = require("discord.js");

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async execute(message, args, client){
        if(!args[0]) return message.edit('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.edit('```' + data + '```')
        })
    }
}