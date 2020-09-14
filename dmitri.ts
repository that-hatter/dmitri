import { Client, Message } from "eris";
import { token, prefix } from "./config.json";
import * as util from "./modules/util";

const bot = new Client(token);

bot.on("ready", () => {
  console.log("Connected!");
});

bot.on("messageCreate", async (msg: Message) => {
  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
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
  } else {
    for (const m of msg.mentions) {
      if (m.id == "744073388036980758") {
        const cmd = util.getCommand("about");
        if (cmd) {
          try {
            return await cmd.exec([], msg, bot);
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  }
});

bot.connect();
