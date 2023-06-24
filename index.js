const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
  // The client is ready!
  console.log('Client is ready!');
});

client.on('message', msg => {
  // Handle incoming messages
  console.log(msg);
});

client.initialize();






const { Client } = require('whatsapp-web.js');
const { GPT } = require('gpt-3-api');

class GPTPlugin extends Client {
  onMessage(msg) {
    // Generate a response using GPT
    const response = await GPT.generateText(msg.text);

    // Send the response
    this.sendMessage(response);
  }
}

module.exports = GPTPlugin;








const { Client } = require('whatsapp-web.js');

class TimePlugin extends Client {
  onReady() {
    // Set the bio to the current time
    this.setBio(new Date().toLocaleString());
  }
}

module.exports = TimePlugin;

