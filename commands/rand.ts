import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { basic } from "./basic";
import * as util from "../modules/util";
import * as config from "../config.json";
import { periodic } from "../modules/Table";

const names = ["rand", "random"];
const desc = [
  "Gives a random element and its basic information.",
  "You can use a `[filter]` to limit the elements.",
  `Filter usage is the same as \`${config.prefix}list\``,
];

const func = async (
  args: string[],
  msg: Message,
  client: Client
): Promise<Message | void> => {
  const filters: util.Filter[] = args.length > 0 ? util.parseFilters(args) : [];
  const randEl = periodic.newFiltered(filters).getRandom();

  return randEl && randEl.name
    ? await basic.exec([randEl.name], msg, client)
    : await msg.channel.createMessage({
        embed: {
          color: util.colorOf("help"),
          title: "No elements found.",
          description:
            "Sorry, I couldn't find an element matching your filter." +
            " Recheck your query, or try using a different filter.",
        },
      });
};

export const rand = new Command(names, desc, func);
