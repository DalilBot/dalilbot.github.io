const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    // Generate and display the QR code
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code above to log into WhatsApp.');
});

client.on('ready', () => {
    console.log('Dalil Bot is ready to go!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === '/start') {
        message.reply('Hello, this is Dalil Bot, your school partner for success. How could I help you today?');
    }
});

// Start the client
client.initialize();
