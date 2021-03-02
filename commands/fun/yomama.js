const Discord = require("discord.js");

module.exports = {
    name: 'yomama',
    description: "sends yomama joke",
    execute(message, args, client){
        let user = message.mentions.users.first();
        const jokes =  ['mama is so fat that her bellybutton gets home 15 minutes before she does.','mama is so fat that the only exercise she gets is when she chases the ice cream truck.','mama is so fat that when she gets in an elevator, it has to go down.','mama is so fat that when she hauls ass, she has to make two trips.','mama is so fat that she had to go to Sea World to get baptized.','mama is so fat that her bellybutton’s got an echo.','mama is so fat that when she turns around people throw her a welcome back party.','mama is so fat that her belly button doesn’t have lint, it has sweaters.','mama is so fat that a picture of her would fall off the wall.','mama is so fat that when she takes a shower, her feet don’t get wet.','mama is so fat that she puts on her lipstick with a paint-roller!','mama is so fat that she could sell shade.','mama is so fat that I ran around her twice and got lost.','mama is so fat that the shadow of her butt weighs 100 pounds.','mama is so fat that when she’s standing on the corner police drive by and yell, “Hey, break it up.','mama is so fat her blood type is Ragu.','mama is so fat that she can’t even fit into an AOL chat room.','mama is so fat that when she runs the fifty-yard dash she needs an overnight bag.','mama is so fat when she goes skydiving she doesnt use a parachute to land, she uses a twin-engine plane!','mama is so fat MTX audios subwoofers couldnt rattle her bones!','mama is so fat her headphones are a pair of PA speakers connected to a car amplifier.','mama is so fat that she doesn’t have a tailor, she has a contractor.','mama is so fat that we went to the drive-in and didnt have to pay for her because we dressed her up as a Tota.','mama is so fat that she was cut from the cast of E.T. because she caused an eclipse when she rode the bike across the moon.','mama is so fat that when u get on top of her ur ears pop.','mama is so fat that the camera TAKES AWAY 10 lbs from her appearance.','mama is so fat that her sedan can fit 5 people... or just  mama with the front seats removed.','mama is so fat that when she went to seaworld the whales started singing "We Are Family".','mama is so fat that she fell out of both sides of her bed.','mama is so fat that the stripes on her pajamas never end.','mama is so fat, Al Gore accuses her of global warning everytime she farts!','mama is so fat that shes got every caterer in the city on speed dial!','mama is so fat that eating contests have banned her because she is unfair competition.','mama is so fat that she measures 36-24-36, and the other arm is just as big.','mama is so fat that she gets her toenails painted at Lucky’s Auto Body.','mama is so fat that when she goes to an amusement park, people try to ride HER!','mama is so fat that when she jumps up in the air she gets stuck!','mama is so fat that she has more Chins than a Chinese phone book!','mama is so fat that she influences the tides.','mama is so fat that when she plays hopscotch, she goes New rk, L.A., Chicago...','mama is so fat that NASA has to orbit a satellite around her!']
        
        

        const selectedjoke = jokes[Math.floor(Math.random() * 25)];
        var embed = new Discord.RichEmbed()
            .setDescription(`${user}'s ${selectedjoke}`)
            
            
            
            .setFooter("Carbanaro", "https://i.imgur.com/nmTgYYp.png")
            .setColor('#e00961')
                 message.edit(embed);
                 return;
        
  
  
        
    }
}