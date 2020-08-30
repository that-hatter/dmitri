import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { basic } from "./basic";
import * as table from "../modules/tableQuery"

const names = ["rand", "random"];
const desc = ["Gives a random element and its basic information."];

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  return await basic.exec(
    [String(Math.floor(Math.random() * table.getMaxZ()))],
    msg,
    client
  );
}

export const rand = new Command(names, desc, func);