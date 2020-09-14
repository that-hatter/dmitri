import { Message, Client } from "eris";
import { Command } from "./Command";
import * as util from "./util";
import { periodic } from "./Table";

export class PropertyCommand extends Command {
  constructor(names: string[], label: string) {
    const func = async (
      args: string[],
      msg: Message,
      client: Client
    ): Promise<Message | void> => {
      if (args.length < 1) return;
      const element = periodic.getElement(args[0]);

      return await msg.channel.createMessage(
        element
          ? {
              embed: {
                color: util.colorOf(element.getPropertyString("categ")),
                title: element.getPropertyString("name"),
                url: element.getPropertyString("source"),
                description: `**${label}**: ${element.getPropertyString(
                  this.names[0]
                )}`,
              },
            }
          : {
              embed: {
                color: util.colorOf("help"),
                title: "Element not found.",
                description: `There are no elements with this name, symbol, or number: \`${args[0]}\``,
              },
            }
      );
    };

    const desc = [
      `Gives the specified \`<element>\`'s **${label}**.`,
      "`<element>` can be the name, symbol, or atomic number.",
      "Both name and symbol are not case-sensitive.",
    ];
    const usage = "<element>";

    super(names, desc, func, usage);
  }
}
