var tmi = require('tmi.js');
var fs = require('fs');

// this gonna be fine -- https://api.twitch.tv/kraken/streams/amazHS?oauth_token=

var options = require("./options.json");

var client = new tmi.client(options);

client.connect();

client.on("timeout", function (channel, username, reason, duration) {
    client.say(channel, "Get rekt "+username+" | reason: "+reason+" | duration: "+duration+" sec");
});


client.on('chat', function(channel, user, message,self){
    
    if (message == "!jopa") {
        client.say(channel, user['display-name']+ ", sam ty jopa");
    } 

    if (message == "!pc") {
        client.say(channel, "wooden pc");
    }

    if (message.includes("!song")) {
        var song = fs.readFileSync("Z:/now_play.txt","utf8");
        client.say(channel, song);
    }
})

client.on('connected', function(addess, port){
    console.log("conneccccccccc-ted");
})