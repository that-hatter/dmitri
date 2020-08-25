import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as config from "../config.json"
import * as util from "../modules/util"

const names = ["help"];
const desc = `Explains what a command does and how to use it, along with its aliases and examples. You can view a list of available commands using \`${ config.prefix }commands\`.`;
const usage = ["COMMAND", "Here __COMMAND__ can be the actual name of the command, or any of its aliases."];

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  const cmdName: string = args[0] || "help";
  const cmd = util.getCommand(cmdName);
  if (cmd) return await cmd.showHelp(msg);

  return await msg.channel.createMessage({
    embed: {
      color: util.colorOf("help"),
      title: `Command not found:`,
      description: 
        `
        I have no commands named \`${ args[0] }\`. 
        You can view the list of my available commands using \`${ config.prefix }commands\`.
        `,
    }
  });
  
}

export const help = new Command(names, desc, func, usage);