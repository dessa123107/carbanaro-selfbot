
const Discord = require("discord.js");

module.exports = {
    name: 'roast',
    description: "sends roast",
    execute(message, args, client){
        
        var roasts = ['You have no idea how much lucky those who do not know you are.',
        'I do not strike unarmed men, and that is why I have refused to justify that with a response.',
        'Nature too must have turned its back the day you were born.',
        'How does one live on earth like this?',
        'Do you eat with that mouth? That is like feeding a pig’s pen.',
        'Even if the manual was boldly labelled under the chair, I bet you cannot topple it over.',
        'I would like to agree with you, but I was not raised to tell lies.',
        'You would be amazed to know what the first letter of the English alphabet was.',
        'A tree toils day and night somewhere in the world making energy for you, you should properly apologize to that tree. ',
        'Did you happen to kill a monkey and steal its face?',
        'Oops, the fly just crossed your face right now just dropped dead. ',
        'Somewhere in one corner of the universe are they luckiest of all human races, they are those who do not know you.',
        'That chicken is man more than you.',
        'If there was a kingdom filled with you, the dumbest sheep is too high a king for you.',
        'Looking at you right now, I finally understand why people would contemplate suicide.',
        'Before I met you, I had always looked upon jumping off a cliff as an irrational thought.',
        'Talking to you is like talking to a crayfish.',
        'I used to think dumbness came with how pretty one is. Man, you are changing all my life theories.',
        'How could one be so stupid without being pretty? What a mix.',
        'Even a goat would laugh at your actions.',
        'You are just as useful as the ‘p’ is psycho. Except, you are the whole world.',
        'If I had to choose between a minute with you and a year with rats, the rats would feel like kings.',
        'You are as smart as wall. ',
        'Even more clean insults',
        'You are dumb as soup.',
        'Your ideas are so sharp you could cut them with the stem of a tree. ',
        'Your certificate of birth must have been strongly sponsored by the condom factory as an apology letter to your folks.',
        'Should you not stop talking? What would you do when your words finish?',
        'It is about time you stopped talking, what happens when your brain goes empty in about two seconds?',
        'Your idiocy is the sort used as example to actual idiots.',
        'Calling you stupid is an insult to actual stupid people.',
        'Somewhere in the world, a city of idiots have lost their townsman.',
        'Climbing to your ego and jumping to your IQ is such a way to commit suicide.',
        'If only I had some time, I would have thought of explaining it to you, unfortunately, I do not have crayons either.’',
        'My IQ just reduced for having listened to you.',
        'One quick way to reduce one’s IQ is by listening to you, I feel five years dumber.',
        'Now, did you not practice this in a mirror?',
        'You really, should learn to stop talking into your mirror.',
        'If I were not here, the smartest person in the room would be that chair.',
        'Just before I walked in, that shoe was the smartest person here.',
        'I really wanted to ask how you manage with being such a disappointment to your family, then I just realised that you do not know what it is like to not be.',
        'They say ‘be yourself’. Do not listen to them. That advice was clearly not meant for you.',
        ]
        
            const chosenroast = roasts[Math.floor(Math.random() * 41)];
                message.edit(chosenroast)
                return;
        
        
     
            
        }
    
}