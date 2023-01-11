const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya girdi ve aktif.`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Ase Hoşgeldin!');
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'merhaba') {
      msg.reply('Merhaba Hoşgeldin!');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'selamın aleyküm') {
      msg.reply('Ase Hoşgeldin!');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'bıy') {
      msg.reply('BIY BIY');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'yi geceler') {
      msg.reply('yi geceler');
    }
  });

client.login('MTA2MjY3ODA2NzEzNjQzNDMwNw.GO3zzK.bXeWIHiqMFlnXv_f8iuL9Pt-yBN6hVxsaKEoDo');

