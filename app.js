const Discord = require('discord.js');
const client = new Discord.Client();

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
    prefix = fs.readFileSync("./prefix.txt", "utf-8").toString().split("\n")[0]
    if (message.author.id !== client.user.id) return;
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


    client.on('message', async m => {
        
        
        let args = m.content.substring(prefix.length).split(" ");
    
    
        if (m.content === prefix + 'help avatar'){
            const avatarmsg = 
            `**__AVATAR__**



**${prefix}av <user> <no user = self>** = sends avatar of specified user
            
            
                                
**${prefix}stealav <user>** = sets the avatar of the mentioned user as yours(CANNOT BYPASS NITRO)`
            
                        var avembed = new Discord.RichEmbed()
                        .setDescription(avatarmsg)
                        
                        .setColor('#e00961')
                        .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
                        .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
                
                             m.edit(avembed);
                             return;
                    }
                
                    if (m.content === prefix + 'help food'){
                       const foodmsg = 
            `
            **__FOOD__**


            
**${prefix}mc** = sends the mcdonalds menu`
            
            
                        var foodembed = new Discord.RichEmbed()
                        .setDescription(foodmsg)
                        .setColor('#e00961')
                        .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
                        .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
                        m.edit(foodembed);
                        return;
                    }
                
                    if (m.content === prefix + 'help fun'){
                        const funmsg = 
            `
            **__FUN__**

        
            
**${prefix}coinflip** = sends a heads or tails answer

            
                    
**${prefix}gay <user>** = sends the gay percentage of the mentioned user

            
                    
**${prefix}pp <user> <no user = self>** = sends the pp size of the specified user

            
                    
**${prefix}quickmsg <msg>** = sends the message then quickly deletes it


            
**${prefix}roast** = sends random roast message


            
**${prefix}yomama <user>** = sends a yo mama joke about the user's mama`
                        
            
                        var funembed = new Discord.RichEmbed()
                        .setDescription(funmsg)
                        .setColor('#e00961')
                        .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
                        .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
                        m.edit(funembed);
                        return;
                    
                    }
                
                    if (m.content === prefix + 'help text-alters'){
                        const textmsg = 
            `
            **__TEXT ALTERS__**


                    
**${prefix}announce <message>** = sends message with ping

            
            
**${prefix}ascii <text>** = sends the text in ascii

            
                    
**${prefix}bold <text>** = sends the text bolded

            
                    
**${prefix}code <text>** = sends the text in coding format

                    
            
**${prefix}embed <text>** = sends the text in an embed

            
            
**${prefix}italics <text>** = sends the text in italics

            
                    
**${prefix}sarcastic <text>** = sEnDs ThE tExT lIkE tHiS



**${prefix}uwu <text>** = sends messages wike this



**${prefix}glitch <text>** = sends and deletes the message multiple times to form a glitch effect



**${prefix}crossout <text>** = sends text crossed out



**${prefix}underline <text>** = sends message underlined`
            
            var textembed = new Discord.RichEmbed()
            .setDescription(textmsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(textembed);
            return;
            
            
                       
                    } 
                    if(m.content === prefix + 'help bitcoin'){
                        const btcmsg = 
            `
            **__BITCOIN__**

            
            
**${prefix}btc** = sends the current bitcoin price (USD)`
                        
                        
            var btcembed = new Discord.RichEmbed()
            .setDescription(btcmsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(btcembed);
            return;
                    
                    
                    
                    }if(m.content === prefix + 'help alphabet'){
                        const alphamsg = 
            `
            **__ALPHABET__**

            
            
**${prefix}alpha** = sends the english alphabet



**${prefix}alphareverse** = sends the english alphabet backwards`
                        
                        
            var alphaembed = new Discord.RichEmbed()
            .setDescription(alphamsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(alphaembed);
            return;
                    
                    
                    
                    } if(m.content === prefix + 'help status'){
            
                        const statusmsg = 
            `
            **__STATUS__**
            
                    
**${prefix}stream <status>** = sets status as message but it appears as a stream

            
                    
**${prefix}watch <status>** = sets status as message but it appears as watching

            
                    
**${prefix}listen <status>** = sets status as message but it appears as listening

            
                    
**${prefix}play <status>** = sets status as message but it appears as playing

            
                    
**${prefix}status off** = turns all status's off`
            
            
            var statusembed = new Discord.RichEmbed()
            .setDescription(statusmsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(statusembed);
            return;
            
            
            
                    } if(m.content === prefix + 'help math'){
                        const mathmsg = 
                        `
                        **__MATH__**

            
                        
**${prefix}multiply <number> <number>** = multiples the two numbers

                        
                        
**${prefix}add <number> <number>** = adds the two numbers

            
            
**${prefix}subtract <number> <number> = subtracts number 2 from number 1

            
            
**${prefix}divide <number> <number> = divides number 2 from number 1`
            
            
                        var mathembed = new Discord.RichEmbed()
            .setDescription(mathmsg)
            .setColor('#e00961')
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(mathembed);
            return;
            
                    } if(m.content === prefix + 'help time'){
                        const timemsg = 
                        `**__TIME__**

                        
**${prefix}est** = sends time in est

            
            
**${prefix}pst** = sends time in pst

            
            
**${prefix}cst** = sends time in cst

            
            
**${prefix}mst** = sends the time in mst

            
            
**${prefix}hast** = sends time in hast

            
            
**${prefix}akst** = sends time in akst`
                        var timeembed = new Discord.RichEmbed()
                        .setDescription(timemsg)
                        .setColor('#e00961')
                        .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
                        .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
                        m.edit(timeembed);
                        return;
            
            
                    }
                    
                    
                    if(m.content === prefix + 'help hypesquad'){
                        const hypemsg = 
            `
            **__HYPESQUAD__**
            
                    
**${prefix}hypesquad** = shows the options for changing hypesquad house

            
                    
**${prefix}brilliance** = sets hypesquad as brilliance house

            
                    
**${prefix}balance** = sets hypesqaud as balance house

            
                    
**${prefix}bravery** = sets hypesquad as bravery house
            

            
**${prefix}random** = randomizes hypesquad house`
            
            
            var hypeembed = new Discord.RichEmbed()
            .setDescription(hypemsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(hypeembed);
            return;
                    } if(m.conetent === prefix + 'help moderation'){
                        const modmsg = 
            `
            **__MODERATION__**

            
                    
**${prefix}purge <amount>** = purges YOUR messages (can be used in dms or servers)`
            
            var modembed = new Discord.RichEmbed()
            .setDescription(modmsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(modembed);
            
                    } if(m.content === prefix + 'help snipers') {
            
                    const snimsg = 
            `
            **__SNIPERS(ALWAYS ON EXCEPT MESSAGE SNIPE)__**

            
                    
**Giveaway sniper** = auto joins giveaways with the 🎉 reaction

            
                    
**Nitro sniper** = auto claims any nitro codes sent into any channels/dms

            
                    
**${prefix}snipe** = sends the most recent deleted message`
            
            var sniembed = new Discord.RichEmbed()
            .setDescription(snimsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(sniembed);
                    } if(m.content === prefix + 'help emojis'){
                        const emojimsg = 
                        `
                        **__EMOJIS__**

            
                        
**${prefix}5head** = sends bahroo 5head emoji

            
            
**${prefix}aww** = sends aww bahroo emoji

            
            
**${prefix}blankmind** = sends bahroo aww emoji

            
            
**${prefix}blind** = sends bahroo blindfold emoji

            
            
**${prefix}bonk** = sends bahroo bonk emoji

            
            
**${prefix}coffee** = sends bahroo coffee drink emoji

            
            
**${prefix}comfy** = sends bahroo comfy emoji

            
            
**${prefix}cookie** = sends bahroo cookie emoji

            
            
**${prefix}cry** = sends bahroo cry emoji

            
            
**${prefix}eyeroll** = sends pepe eyeroll emoji

            
            
**${prefix}french** = sends pepe french emoji

            
            
**${prefix}hi** = sends bahroo hi emoji

            
            
**${prefix}kek** = sends kek laugh emoji

            
            
**${prefix}lick** = sends bahroo lick emoji

            
            
**${prefix}peek** = sends bahroo peek emoji

            
            
**${prefix}pog** = sends bahroo pog emoji

            
            
**${prefix}ponder** = sends bahroo pog emoji

            
            
**${prefix}pray** = sends bahroo pray emoji

            
            
**${prefix}sad** = sends bahroo sad emoji

            
            
**${prefix}sip** = sends bahroo sip emoji

            
            
**${prefix}sleepy** = sends bahroo sleepy emoji

            
            
**${prefix}smoosh** = sends bahroo glass smoosh emoji`
            
            
                        var emojiembed = new Discord.RichEmbed()
            .setDescription(emojimsg)
            .setColor('#e00961')
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(emojiembed);
            return;
                    }if(m.content === prefix + 'help utility'){
                        const utimsg =
            `
            **__UTILITY__**

            
                    
**${prefix}help** = shows this message

            
                    
**${prefix}price** = shows the price of the selfbot

            
                    
**${prefix}tos** = shows Carbanaro's TOS

            
            
**${prefix}inv** = sends Perm discord invitation

            
                    
**${prefix}install** = shows the instructions for installation

            
            
**${prefix}prefix <new prefix>** = changes prefix for selfbot`
            
            var utiembed = new Discord.RichEmbed()
            .setDescription(utimsg)
            .setColor('#e00961')
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            m.edit(utiembed);
                    } else if(m.content === prefix + 'help'){
                        const helpmsg = 
             ` 
             **__AVATAR__**
            

**__FOOD MENUS__**

            
**__FUN__**

            
**__TEXT ALTERS__**

            
**__BITCOIN__**

            
**__STATUS__**

             
**__HYPESQUAD__**

            
**__MODERATION__**

            
**__UTILITY__**

            
**__MATH__**

            
**__TIME__**

            
**__EMOJIS__**`

             
             
             
             
             
            
            
            
             var embed = new Discord.RichEmbed()
             .setDescription(helpmsg)
             .setTitle('HELP CATEGORIES')
             .setColor('#e00961')
             .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png')
             .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
             m.edit(embed);
            
            
                    }
                    });
    
          
          
          
let tokenFile = fs.readFileSync("token.txt", "utf-8")

let token = fs.readFileSync("token.txt", "utf-8").toString().split("\n")[0]

const prefixfile = fs.readFileSync("prefix.txt", "utf-8")

let prefix = fs.readFileSync("./prefix.txt", "utf-8").toString().split("\n")[0]
console.log(fs.readFileSync("./prefix.txt", "utf8").toString())
client.login(token)
