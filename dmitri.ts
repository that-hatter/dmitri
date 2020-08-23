import { Client, Message } from "eris";
import { token, prefix } from "./config.json"
import * as util from "./modules/util"

const bot = new Client(token);

bot.on("ready", () => {
  console.log("Bot connected.");
});

// message handler
bot.on("messageCreate", async (msg: Message) => {
  if (msg.author.bot || !msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length).toLowerCase().split(" ");

  if (args.length > 0) {
    const cmd = util.getCommand(String(args.shift()));
    if (cmd) {
      try {
        return await cmd.exec(args, msg, bot);
      } catch (err) {
        console.log(err);
      }
    }
  }

});

bot.connect();