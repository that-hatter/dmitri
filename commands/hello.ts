import { Client, Message } from "eris";
import { Command } from "../modules/Command";

const names = ["hello"];
const desc = "Added because of <@492913557277769729>.";

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  return await msg.channel.createMessage("Hi!");
}

export const hello = new Command(names, desc, func);