import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import { Element } from "../modules/Element";
import * as config from "../config.json";
import * as util from "../modules/util";
import { periodic } from "../modules/Table";

const elemEmbed = (element: Element) => {
  return {
    embed: {
      title: `${element.getPropertyString(
        "number"
      )} | ${element.getPropertyString("name")} (${element.getPropertyString(
        "symbol"
      )})`,
      url: element.getPropertyString("source"),
      color: util.colorOf(element.getPropertyString("categ")),
      description:
        `**Mass**: ${element.getPropertyString("mass")} | ` +
        `**Phase at STP**: ${element.getPropertyString("phase")}\n` +
        `**Period**: ${element.getPropertyString("period")} | ` +
        `**Group**: ${element.getPropertyString("group")} | ` +
        `**Block**: ${element.getPropertyString("block")}\n` +
        `**Density**: ${element.getPropertyString("density")}\n` +
        `**Category**: ${element.getPropertyString("categ")}\n` +
        `**Discovered By**: ${element.getPropertyString("discoverer")}\n` +
        `**Named by**: ${element.getPropertyString("namer")}\n` +
        `**Boiling Point**: ${element.getPropertyString("boil")}\n` +
        `**Melting Point**: ${element.getPropertyString("melt")}\n` +
        `**Molar Heat**: ${element.getPropertyString("heat")}\n` +
        `**Electron Shells**: ${element.getPropertyString("shells")}\n` +
        `**Electronegativity**: ${element.getPropertyString("negativity")}\n` +
        `**Electron Affinity**: ${element.getPropertyString("affinity")}\n` +
        `**Ionization Energies**: ${element.getPropertyString("energies")}\n` +
        `**Learn more:** [RSC](${element.rsclink}) | [PubChem](${element.pbclink}) | [NIST](${element.nstlink})`,
      footer: {
        text: element.getPropertyString("conf"),
      },
    },
  };
};

const names = ["full", config.prefix + config.prefix];
const desc = [
  "Displays more extensive data about the specified `<element>`.",
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
  const element = periodic.getElement(args[0]);
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

export const full = new Command(names, desc, func, usage);
