const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "sends a list of commands",
    execute(message, args, client){
        
        const helpcmds = `
        **__AVATAR__**

?av <user> <no user = self> = sends avatar of specified user

?stealav <user> = sets the avatar of the mentioned user as yours(CANNOT BYPASS NITRO)

**__FOOD MENUS__**

 ?mc = sends the mcdonalds menu

         **__FUN__**
 ?coinflip = sends a heads or tails answer

 ?gay <user> = sends the gay percentage of the mentioned user

?pp <user> <no user = self> = sends the pp size of the specified user

 ?quickmsg <msg> = sends the message then quickly deletes it

**__TEXT ALTERS__**

?announce <message> = sends the message and pings inside of it

?ascii <text> = sends the text in ascii

?bold <text> = sends the text bolded

?code <text> = sends the text in coding format

?embed <text> = sends the text in an embed

?italics <text> = sends the text in italics

?sarcastic <text> = sEnDs ThE tExT lIkE tHiS

**__BITCOIN__**
?btc = sends the current bitcoin price (USD)

**__STATUS__**
?stream <status> = sets status as message but it appears as a stream

?watch <status> = sets status as message but it appears as watching

?listen <status> = sets status as message but it appears as listening

?play <status> = sets status as message but it appears as playing

?status off = turns all status's off

**__HYPESQUAD__**

?hypesquad = shows the options for changing hypesquad house

?brilliance = sets hypesquad as brilliance house

?balance = sets hypesqaud as balance house

?bravery = sets hypesquad as bravery house

?random = randomizes hypesquad house

**__MODERATION__**

?purge <amount> = purges YOUR messages (can be used in dms or servers)

**__SNIPERS(ALWAYS ON EXCEPT MESSAGE SNIPE)__**

Giveaway sniper = auto joins giveaways with the 🎉 reaction

Nitro sniper = auto claims any nitro codes sent into any channels/dms

?snipe = sends the most recent deleted message

**__UTILITY__**

?help = shows this message`

        var embed = new Discord.RichEmbed()
            .setDescription(helpcmds)
            
            .setColor('RANDOM')
            .setFooter('Carbanaro')
                 message.edit(embed);
                 return;
        
  
        
        
    }
}
