const { Telegraf } = require("telegraf");
const axios = require("axios");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

try {
  bot.start((ctx) => ctx.reply("Welcome to Shubham's bot"));

  bot.command("eat", (ctx) => ctx.reply("Eating bro"));

  bot.on("sticker", (ctx) => ctx.reply("<3"));

  bot.hears("hi", (ctx) => ctx.reply("I'm back bro, you there"));

  bot.command("binarytree", async (ctx) => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js"
    );

    ctx.reply(response.data);
  });

  bot.launch();
} catch {
  console.log("Bro check the code");
}

// npx nodemon index.js 2:04
