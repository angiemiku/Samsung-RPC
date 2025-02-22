const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const express = require('express');
const app = express();

/////////////////////////////////////////////////////////
const port = 3000; //Port
const token = proccess.env.token || "DISCORD TOKEN HERE";//Your discord account TOKEN
/////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.send('Success!!')
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

client.on('ready', async () => {
  client.user.setSamsungActivity('com.YostarJP.BlueArchive', 'START');
});

client.login(token);
