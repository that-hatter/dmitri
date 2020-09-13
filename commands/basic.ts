import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as config from "../config.json";
import * as util from "../modules/util";
import { Element } from "../modules/Element";
import { fullTable } from "../modules/Table";

const elemEmbed = (element: Element) => {
  return {
    embed: {
      title: element.getPropertyString("name"),
      description: element.getPropertyString("summary"),
      url: element.getPropertyString("source"),
      color: util.colorOf(element.getPropertyString("categ")),
      thumbnail: {
        url: element.imglink.substring(0, element.imglink.length - 4) + ".jpg",
      },
      fields: [
        {
          name: "Symbol",
          value: element.getPropertyString("symbol"),
          inline: true,
        },
        {
          name: "Number",
          value: element.getPropertyString("number"),
          inline: true,
        },
        {
          name: "Mass",
          value: element.getPropertyString("atomic_mass"),
          inline: true,
        },
        {
          name: "Period",
          value: element.getPropertyString("period"),
          inline: true,
        },
        {
          name: "Group",
          value: element.getPropertyString("group"),
          inline: true,
        },
        {
          name: "Category",
          value: element.getPropertyString("category"),
          inline: true,
        },
      ],
      footer: {
        text: element.getPropertyString("sconf"),
      },
    },
  };
};

const names = ["basic", config.prefix];
const desc = [
  "Displays basic information regarding the specified `<element>`.",
  "`<element>` can be the name, symbol, or atomic number.",
  "Both name and symbol are not case-sensitive.",
];
const usage = "<element>";

const func = async (
  args: string[],
  msg: Message,
  client: Client
): Promise<Message | void> => {
  if (args.length < 1) return;
  const element = fullTable.getElement(args[0]);
  return await msg.channel.createMessage(
    element
      ? elemEmbed(element)
      : {
          embed: {
            color: util.colorOf("help"),
            title: "Element not found.",
            description: `There are no elements with this name, symbol, or number: \`${args[0]}\``,
          },
        }
  );
};

export const basic = new Command(names, desc, func, usage);
