import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { basic } from "./basic";
import * as table from "../modules/tableQuery";
import * as util from "../modules/util";

const names = ["list", "filter"];
const desc = [
  "Lists all the elements that match the given `<filter>`",
  "You can use multiple filters separated by commas.",
  "A filter is one `<keyword>` followed by `=` and a corresponding `<value>`",
  "If the `<value>` is numerical, you can also set a range: `[min] to [max]`.",
  "Here is a list of available keywords:",
  "`period`, `group`, `category`, `phase`, `block`, `mass`, `num`, `neg`, `aff`, `den`, `mp`, `bp`, `heat`"
];
const usage = "<keyword> = <value | [min] to [max]>";

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  const filters: table.Filter[] = args.length > 0 ? table.parseFilters(args): [];
  const list = table.getList(filters);

  let listStr = "";
  for (let i = 0; i < list.length; i++) {
    if (!list[i].name) continue;
    listStr += list[i].name;
    listStr += (" ").repeat(14 - list[i].name.length);
    if (i % 3 == 2 && i < list.length - 1) listStr += "\n";
  }

  return await msg.channel.createMessage(
    list.length > 0 ? {
      embed: {
        color: util.colorOf("help"),
        title: "List of elements matching your filter:",
        description: `\`\`\`${ listStr }\`\`\``,
        footer: { 
          text: args.length > 0 ? 
          filters.map(f => {
            const val = f.range ? f.value.split("to").map(x => x.trim()).join(" to ") : f.value;
            return f.property[0].toUpperCase() + f.property.substring(1) + ": " + val;
          }).join(" | ") : "All elements." 
        }
      }
    } : {
      embed: {
        color: util.colorOf("help"),
        title: "No elements found.",
        description: 
          "Sorry, I couldn't find an element matching your filter."
          + " Recheck your query, or try using a different filter.",
      }
    }
  );
}

export const list = new Command(names, desc, func, usage);