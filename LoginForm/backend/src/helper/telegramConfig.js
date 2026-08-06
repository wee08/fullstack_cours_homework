const { TelegramBot } = require("node-telegram-bot-api");
const dotevn = require("dotenv");
dotevn.config();
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const sendMessageToTelegram = async (req, res, message) => {
  const chatId = "-5457207493";
  try {
    await bot.sendMessage(chatId, message);
    res.send({
      message: "message sent to telegram bot successfuly",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendMessageToTelegram };
