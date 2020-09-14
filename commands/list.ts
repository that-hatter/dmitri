import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as util from "../modules/util";
import { periodic } from "../modules/Table";

const names = ["list", "filter"];
const desc = [
  "Lists all the elements that match the given `<filter>`",
  "You can use multiple filters separated by commas.",
  "A filter is one `<keyword>` followed by `=` and a corresponding `<value>`",
  "If the `<value>` is numerical, you can also set a range: `[min] to [max]`.",
  "Here is a list of available keywords:",
  "`period`, `group`, `categ`, `phase`, `block`, `mass`, `number`, `negativity`, `affinity`, `density`, `melt`, `boil`, `heat`",
];
const usage = "<keyword> = <value | [min] to [max]>";

const func = async (
  args: string[],
  msg: Message,
  client: Client
): Promise<Message | void> => {
  const filters: util.Filter[] = args.length > 0 ? util.parseFilters(args) : [];
  const list = periodic.newFiltered(filters).elements;

  let listStr = "";
  let count = 0;
  for (const [name, elem] of list) {
    listStr += name;
    listStr += " ".repeat(14 - name.length);
    if (count % 3 == 2 && count < list.size - 1) listStr += "\n";
    count++;
  }

  return await msg.channel.createMessage(
    list.size > 0
      ? {
          embed: {
            color: util.colorOf("help"),
            title: `${count} elements matched your filter.`,
            description: `\`\`\`${listStr}\`\`\``,
            footer: {
              text:
                args.length > 0
                  ? filters
                      .map((f) => {
                        const val = f.val2 ? f.val1 + " to " + f.val2 : f.val1;
                        return `${
                          f.prop[0].toUpperCase() + f.prop.substring(1)
                        }: ${val}`;
                      })
                      .join(" | ")
                  : "All elements.",
            },
          },
        }
      : {
          embed: {
            color: util.colorOf("help"),
            title: "No elements found.",
            description:
              "Sorry, I couldn't find an element matching your filter." +
              " Recheck your query, or try using a different filter.",
          },
        }
  );
};

export const list = new Command(names, desc, func, usage);
