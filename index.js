const Discord = require('discord.js');
const client =  new Discord.Client();

client.on('ready', () => {
  console.log('Ready');
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('This is a help command');
  }
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Your token')
