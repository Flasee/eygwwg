// Load up the discord.js library
const Discord = require("discord.js");
var pone = null;
var ptwo = null;
var pthree = null;
var pfour = null;
var pfive = null;
var psix = null; 
var pseven = null;
var peight = null;
var pnine = null;
var pten= null;
var none = null;
var ntwo = null;
var nthree = null;
var nfour = null;
var nfive = null;
var nsix = null; 
var nseven = null;
var neight = null;
var nnine = null;
var nten= null;
var invites = [];
var num = null;


const client = new Discord.Client();


const config = require("./config.json");

client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setGame("https://discord.gg/zhWBRNh");
});

client.on("guildCreate", guild => {
  
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});




client.on("message", async message => {

  //if(message.author.bot) return; turned off for now, but if you want to turn back on just remove the slashes and remove everything after the ;
 
  
  
 
  if(message.content.indexOf(config.prefix) !== 0) return;
  


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
	
   
  if(command === "ping") {

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if(command === "mute") {
	  if(!message.member.roles.some(r=>["Owner", "Coder", "Moderator"].includes(r.name)) )
		return message.reply("Sorry, you don't have permissions to use this!");
	  let member = message.mentions.members.first();
	  member.addRole(message.guild.roles.find('name', 'muted'));
	  let boop = message.content.slice(config.prefix.length + 4 + message.mentions.members.first().username).trim();
	  message.channel.send(member + " has been muted");
	  console.log(config.prefix.length + 4 + message.mentions.members.first().username);
	  await member.removeRole(message.guild.roles.find('name', 'muted'));
  }
  if(command === "unmute") {
	  let member = message.mentions.members.first();
	  member.removeRole(message.guild.roles.find('name', 'muted'));
	  message.channel.send(member + " has been unmuted by " + message.author.username);
	  
  }
  if(command === "color") {
	  	  message.channel.send({embed: {
    color: colordd,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "RLTrading",
    url: "https://discord.gg/zhWBRNh",
   
    fields: [{
        name: "Here is a list of colors",
        value: "https://www.mathsisfun.com/hexadecimal-decimal-colors.html"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
    }
  }
});
	   
    }
  
  if(command === "changecolor") {
	  if(!message.member.roles.some(r=>["Owner", "Coder", "Moderator"].includes(r.name)) )
		return message.reply("Sorry, you don't have permissions to use this!");
	  colordd = args[0];
	  message.channel.send("!topinvites");
  }
  if(command === "changeinvites") {
	  if(!message.member.roles.some(r=>["Owner", "Coder", "Moderator"].includes(r.name)) )
		return message.reply("Sorry, you don't have permissions to use this!");
	  pone = args[0];
	  none = args[1];
	  ptwo = args[2];
	  ntwo = args[3];
	  pthree = args[4];
	  nthree = args[5];
	  pfour = args[6];
	  nfour = args[7];
	  pfive = args[8];
	  nfive = args[9];
	  message.channel.send(":white_check_mark:");
	  
	  //message.channel.send(pone + none + ptwo + ntwo);
  }
  if(command === "rank") {
	  message.channel.send(":white_check_mark:");
var request = require("request"),
  cheerio = require("cheerio"),
  blob = args[1];
  blob2 = args[0];
  url = "http://kyuu.moe/extra/rankapi.php?user=" + blob2 + "&plat=" + blob;

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
	
	
	
	message.channel.send(body);
	
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
}
  if(command === "say") {
	  if(!message.member.roles.some(r=>["Owner", "Coder", "Moderator"].includes(r.name)) )
		return message.reply("Sorry, you don't have permissions to use this!");
	
	
	
 
    const sayMessage = args.join(" ");
 
    message.delete().catch(O_o=>{}); 
   
    
  }
  //10046543
  if(command === "topinvites") {
	 
	  var combine = pone + " - " + none + "\n" + ptwo + " - " + ntwo + "\n" + pthree + " - " + nthree + "\n" + pfour + " - " + nfour + "\n" + pfive + " - " + nfive
	  message.channel.send({embed: {
    color: colordd,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "RLTrading",
    url: "https://discord.gg/zhWBRNh",
   
    fields: [{
        name: "Top invites - Number of invites",
        value: combine
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
    }
  }
});
  }
  if(command === "src") {

	  message.channel.send("https://imgur.com/zsetore");
  }
  if(command === "kms") {
	  message.reply("no! Don't do it!");
  }
  
 
    
   


  
  
  if(command === "kick") {

    if(!message.member.roles.some(r=>["Owner", "Coder", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
  
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    
    if(!message.member.roles.some(r=>["Admin", "Owner", "Coder", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} reason: ${reason}`);
  }
  
  if(command === "purge") {
   if(!message.member.roles.some(r=>["Owner", "Coder"].includes(r.name))) {
		const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{});
		return message.reply("Sorry, you don't have permissions to use this!");
   }
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
 
    const fetched = await message.channel.fetchMessages({count: deleteCount});
	console.log(deleteCount);
    message.channel.bulkDelete(deleteCount)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);
           