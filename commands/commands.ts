import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { PropertyCommand } from "../modules/PropertyCommand";
import { commands } from "./index";
import * as util from "../modules/util";
import * as config from "../config.json";

const names = ["commands"];
const desc = ["Gives a list of available commands for the bot."];

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  let main = "";
  let props = "";

  for (const cmd of commands.arr) {
    if (cmd instanceof PropertyCommand) {
      props += `\`${ config.prefix + cmd.names[0] }\` | `
    } else {
      main += `\`${ config.prefix + cmd.names[0] }`;
      if (cmd.usage) main += " " + cmd.usage;
      main += `\` | ${ cmd.desc[0] }\n`;
    }
  }

  return await msg.channel.createMessage({
    embed: {
      color: util.colorOf("help"),
      title: "Dmitri Commands",
      description: main + "\n",
      fields: [
        {
          name: "You can also query specific properties of an `<element>`:",
          value: props.substring(0, props.length - 2)
        }
      ]
    }
  });
}

export const cmd = new Command(names, desc, func);