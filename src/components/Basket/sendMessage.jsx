const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '6175964793:AAFU_yX2YGSWvbfBjSdhy2wdNQBss0WN0A0';
const bot = new TelegramBot(TOKEN, { polling: false });

// This function sends a message to the specified chat ID
function sendMessage(chatId, message) {
  bot
    .sendMessage(chatId, message)
    .then(() => console.log('Message sent'))
    .catch(error => console.log(`Error sending message: ${error}`));
}

// This function handles the form submission and sends the message to Telegram
function handleFormSubmission(formData) {
  // Process the form data here
  // ...

  // Construct the message text
  const messageText = `New basket order received:\n\n${formData}`;

  // Send the message to Telegram
  const chatId = '-928235385'; // Replace with the chat ID of the Telegram user or group
  sendMessage(chatId, messageText);
}

// Call the handleFormSubmission function when the form is submitted
handleFormSubmission(formData);
