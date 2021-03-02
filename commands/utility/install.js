const Discord = require("discord.js");

module.exports = {
    name: 'install',
    description: "sends how to install message",
    execute(message, args, client){
        
        const installmsg = `
1. Download the file

2. Right click and extract them (youll need winrar or a service like that)

3. run the node.js setup.exe file and download node.js ( if any errors happen u can just download node.js from web)

4. Open token.txt

5.Paste in your discord token. A guide on how to access discord token:https://www.youtube.com/watch?v=YEgFvgg7ZPI

6. Save the file and exit it

7. Open run.bat

8. follow the instructions to redeem a voucher code

9. enter the voucher code you received in the ticket or off of the sellix

10. go back to the menu by pressing 1

11. either start the bot, or create a login and password

12. Login and password is not required but it makes things easier as you can login from the main menu.


Enjoy the bot!`

        var embed = new Discord.RichEmbed()
            .setDescription('**' + installmsg + '**')
            
            
            .setImage('https://i.gyazo.com/7f8831c6570199c30c8efad6ba65d918.png', ".")
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}