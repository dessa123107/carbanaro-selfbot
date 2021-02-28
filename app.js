const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';
const {Collection, Client} = require('discord.js');
client.snipes = new Map()
const fs = require('fs');
const hypesquad = require('hypesquad-changer')
const axios = require('axios').default;
var colors = require("colors")
const regex = new RegExp(/(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)[^\s]+/gmi);
client.on('messageDelete', function(message, channel){
    client.snipes.set(message.channel.id,{
     content: message.content, 
     author: message.author, 
     image: message.attachments.first() ? message.attachments.first().proxyURL : null
     })
   })



client.on('ready', () =>{
    
    console.log(`Logged into: ${client.user.tag}`);
});

 
  
client.aliases = new Collection()
client.commands = new Collection()
const test = require('./commands/text_alters/embed');
['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    client.commands.set(test, command)
    if(command)
    await command.execute(message, args, client)
})




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)

    if(command) {
    command.execute(message, args, client);
    } 
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'snipe'){
        const msg = client.snipes.get(message.channel.id);
        if(!msg) return message.edit("```There isn't anything to snipe```")


        const embed = new Discord.RichEmbed()
   .setTitle("***Snipe***")
    .addField(`***Author:*** ${msg.author.tag}`, '\u200b')
    .setTimestamp(Date.message)
    
    .setDescription(`***Content: ${msg.content}***`)
    .setColor('DARK BLUE')
    .setImage(msg.image)
    message.edit(embed)
    } 
});





client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'mc'){
        

        var menu = `Big Mac		$3.99
        Big Mac – Meal		$5.69
        2 Cheeseburgers		$2.58
        2 Cheeseburgers – Meal		$4.69
        Quarter Pounder with Cheese		$3.79
        Quarter Pounder with Cheese – Meal		$5.49
        Double Quarter Pounder with Cheese		$4.79
        Double Quarter Pounder with Cheese – Meal		$6.49
        Bacon Habanero Ranch Quarter Pounder		$4.09
        Bacon Habanero Ranch Quarter Pounder – Meal		$5.79
        Deluxe Quarter Punder		$4.09
        Deluxe Quarter Punder – Meal		$5.79
        Bacon & Cheese Quarter Pounder		$4.09
        Bacon & Cheese Quarter Pounder – Meal		$5.79
        Filet-O-Fish		$3.69
        Filet-O-Fish – Meal		$5.39
        Double Filet-O-Fish		$4.69
        Double Filet-O-Fish – Meal		$6.39
        Double Cheeseburger		$1.59
        Double Cheeseburger – Meal		$3.99
        Chicken Ranch BLT (Grilled or Crispy)		$4.19
        Chicken Ranch BLT (Grilled or Crispy) – Meal		$5.89`


        const embedmc = new Discord.RichEmbed()
   .setTitle("***Mcdonalds Menu***")
    
    .setTimestamp(Date.message)
    
    .setDescription(menu)
    .setColor('DARK BLUE')
    
    message.edit(embedmc)
    } 
});






client.on('messageReactionAdd', (reaction, user) => {
    

    if(reaction.emoji.name == '🎉'){
        reaction.message.react('🎉')
        
    }

    
})

client.on('message', async message => {
    function getDateTime() {

        var date = new Date();
    
        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
    
        return hour + ":" + min + ":" + sec;
    
    }
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/') || message.content.includes('discord.com/gifts')) {
        var start = new Date()

        if(message.channel.type == "dm") {
            var bruh = "DM" 
         } else {
            var bruh = message.guild.name
         }

        var gift = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        var link = gift.exec(message.content);
        if(!link) return;
        var gcode = link[0].split('/')[1];

        console.log(`${getDateTime()} | Discord Nitro code Sniped! | ${message.content}`.yellow);
        console.log(`Server: ${bruh}`);
        console.log(`Author: ${message.author.tag}`);
        console.log(`Author ID: ${message.author.id}`);
        var time = new Date() - start
        console.log(`Elapsed: ${time}ms`);
        console.log(` `);
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${gcode}/redeem`, 
            headers: 
            {
            'Authorization': client.token
            }
        }).then(
            () => {console.log(`Succesfully claimed Nitro! | ${bruh} | ${message.content}`.brightGreen);
                    var sniped = sniped + 1
                    setTitle(`Nitro Sniper | Sniped: ${sniped}`);
                }
        ).catch(ex => console.log(`Invalid Discord Nitro Code!`.red))
    }
})
function getPrices() {
    let result = axios.get('https://api.coindesk.com/v1/bpi/currentprice/CAD.json')
    .then((response) => {
        return response.data.bpi;
    })
    .catch((error) => {
        console.log(error);
    });
    return result;
}



        
    client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;
     
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
     
        if(command === 'btc'){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
	        
                var embed = new Discord.RichEmbed()
                .setTitle("Current price of Bitcoin")
                .setDescription("$" + response.data.bpi.USD.rate + " USD")
                .setFooter("Carbanaro")
                .setColor('#f7931a')
                
                
            
            
            
                message.edit(embed)
    

        })
    }
    

        });
                
        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'stream'){
                const statusmsg = args.slice(0).join(" ")
        
        client.user.setPresence({
            game: {
                name: statusmsg,
                type: "STREAMING",
                url: "https://www.twitch.tv/carbanro"
            }
        })
        

        var embed = new Discord.RichEmbed()
            .setDescription(`Status successfully changed to Streaming: ${statusmsg}`)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
            .setColor("#9402ff")
                 message.edit(embed);
                 return;

        
            }
        })
        



        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'listen'){
                const listenmsg = args.slice(0).join(" ")
        
        client.user.setPresence({
            game: {
                name: listenmsg,
                type: "LISTENING",
                
            }
        })
        

        var embed = new Discord.RichEmbed()
            .setDescription(`Status successfully changed to Listening to: ${listenmsg}`)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
            .setColor('GREEN')
                 message.edit(embed);
                 return;

        
            }
        })

        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'status'){
                const custommsg = args.slice(0).join(" ")
        
        client.user.setPresence({
            game: {
                name: custommsg,
                type: "CUSTOM_STATUS"
               
            }
        })
        

        var embed = new Discord.RichEmbed()
            .setDescription(`Status successfully turned off`)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
            .setColor("#9402ff")
                 message.edit(embed);
                 return;

        
            }
        })


        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'watch'){
                const watchmsg = args.slice(0).join(" ")
        
        client.user.setPresence({
            game: {
                name: watchmsg,
                type: "WATCHING",
                
            }
        })
        

        var embed = new Discord.RichEmbed()
            .setDescription(`Status successfully changed to Watching: ${watchmsg}`)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
            .setColor('#01c3ff')
                 message.edit(embed);
                 return;

        
            }
        })


        
        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'play'){
                const playmsg = args.slice(0).join(" ")
        
        client.user.setPresence({
            game: {
                name: playmsg,
                type: "PLAYING",
                
            }
        })
        

        var embed = new Discord.RichEmbed()
            .setDescription(`Status successfully changed to Playing: ${playmsg}`)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
            .setColor('#ff00f5')
                 message.edit(embed);
                 return;

        
            }
        })



        client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
         
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
         
            if(command === 'stealav'){
                
                const person = message.mentions.users.first()



                const personav = person.avatarURL
                var embeds = new Discord.RichEmbed()
            .setDescription('Due to discords policy, I cannot change your pfp. There is a cooldown for this, so wait and try again later.')
            
            .setColor('PINK')
            .setFooter('Carbanaro')
            
                 message.edit(embeds);
                 
        
                client.user.setAvatar(personav).catch(err => {
                    message.edit(embeds);
                    });

                var embed = new Discord.RichEmbed()
            .setDescription(`Successfully stole ${person.tag}'s Avatar.`)
            
            .setColor('PINK')
            .setFooter('Carbanaro')
            
                 message.edit(embed);
                 return;


                

                 
            
        } 
            
        
    })




    client.on('message', async m => {
    exports.changer = function(house, token) {
        const request = require("request")
        var RandomSquad = [1,2,3]
        request({method: "POST",
        url: "https://discordapp.com/api/v6/hypesquad/online",
        body: { "house_id": house == "Bravery" ? 1 : house == "Brilliance" ? 2 : house == "Balance" ? 3 : house == "Random" ? RandomSquad[Math.floor(Math.random() * RandomSquad.length)] : undefined },
        json: true,
        headers: { "Authorization": token }})
    
    }
    
    let args = m.content.substring(prefix.length).split(" ");


    if (m.content === prefix + 'bravery'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to bravery!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Bravery", token))
        console.log(color.greenBright("Your house has been changed to bravery!"))
    }

    if (m.content === prefix + 'balance'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to balance!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Balance", token))
        console.log(color.magentaBright("Your house has been changed to balance!"))
    }

    if (m.content === prefix + 'brilliance'){
        m.delete()
        m.channel.send('Successfully changed your hypesquad house to brilliance!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Brilliance", token))
        console.log(color.redBright("Your house has been changed to brilliance!"))
    }

    if (m.content === prefix + 'random'){
        m.delete()
        m.channel.send('Successfully randomized your hypesquad house!') .then(m => {
            m.delete()
        }, 4500)
        console.log(hypesquad.changer("Random", token))
        console.log(color.yellowBright("Your house has been randomized!"))
    } 
    if(m.content === prefix + 'hypesquad'){
        var embedw = new Discord.RichEmbed()
        .setTitle('There are three houses, use the commands shown below to toggle between houses:')
        .addField('?Brilliance', '\u200b')
        .addField('?Balance', '\u200b')
        .addField('?Bravery', '\u200b')
        .addField('?random', '\u200b')
        .setColor('#0000ff')
        .setFooter('Carbanaro')

             m.edit(embedw);
             return;
    
    
    
    }
    })
    
          
          
          
let tokenFile = fs.readFileSync("token.txt", "utf-8")

let token = fs.readFileSync("token.txt", "utf-8").toString().split("\n")[0]
 
client.login(token)