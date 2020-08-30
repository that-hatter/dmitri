import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { basic } from "./basic";
import * as table from "../modules/tableQuery";
import * as util from "../modules/util";

const keywords: { [key: string]: string } = {
  "category": "category",
  "phase": "phase",
  "block": "block",
  "period": "period",
  "group": "group",
  "mass": "atomic_mass",
  "num": "number", 
  "neg": "electronegativity_pauling",
  "aff": "electron_affinity",
  "den": "density",
  "bp": "boil", 
  "mp": "melt",
  "heat": "heat"
}

const rangeables = ["period", "group", "num", "neg", "aff", "den", "bp", "mp", "heat"];

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

const parseFilters = (args: string[]): table.Filter[] => {
  const filterStrings = args.join(" ").split(",");
  const filters: table.Filter[] = [];
  for (const f of filterStrings) {
    let [key, val] = f.split("=");
    [key, val] = [key.trim(), val.trim()];
    filters.push({
      property: keywords[key],
      value: val,
      range: rangeables.includes(key) && val.includes("to")
    });
  }

  return filters;
}

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  if (args.length < 1) return;
  const filters = parseFilters(args);
  const list = table.getList(filters);

  const filstr = filters.map(f => {
    const val = f.range ? f.value.split("to").map(x => x.trim()).join(" to ") : f.value;
    return f.property[0].toUpperCase() + f.property.substring(1) + ": " + val;
  }).join(" | ");

  return await msg.channel.createMessage(
    list.length > 0 ? {
      embed: {
        color: util.colorOf("help"),
        title: "List of elements matching your filter:",
        description: list.map(e => "`" + e.number + " " + e.name + "`").join(" | "),
        footer: { text: filstr }
      }
    } : {
      embed: {
        color: util.colorOf("help"),
        title: "Sorry, I found no elements matching this filter:",
        description: "`" + filstr 
          + "`\n\nRecheck your query to see if there are any mistakes, or try using a different filter.",
      }
    }
  );
}

export const list = new Command(names, desc, func, usage);