import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as config from "../config.json";
import * as util from "../modules/util";
import * as table from "../modules/tableQuery";

const elemEmbed = (element: table.Element) => {
  const fetch = (prop: string) => table.getProperty(element, prop);

  const rsclink =
    "https://www.rsc.org/periodic-table/element/" + fetch("number");
  const pbclink = "https://pubchem.ncbi.nlm.nih.gov/element/" + fetch("number");
  const nistlink =
    "https://webbook.nist.gov/cgi/inchi/InChI%3D1S/" + fetch("symbol");
  return {
    embed: {
      title:
        fetch("number") + " | " + fetch("name") + " (" + fetch("symbol") + ")",
      url: fetch("source"),
      color: util.colorOf(fetch("category")),
      description:
        `**Mass**: ${fetch("atomic_mass")} | **Phase at STP**: ${fetch(
          "phase"
        )}\n` +
        `**Period**: ${fetch("period")} | **Group**: ${fetch(
          "group"
        )} | **Block**: ${fetch("block")}\n` +
        `**Density**: ${fetch("density")}\n` +
        `**Category**: ${fetch("category")}\n` +
        `**Discovered By**: ${fetch("discovered_by")}\n` +
        `**Named by**: ${fetch("named by")}\n` +
        `**Boiling Point**: ${fetch("boil")}\n` +
        `**Melting Point**: ${fetch("melt")}\n` +
        `**Molar Heat**: ${fetch("molar_heat")}\n` +
        `**Electron Shells**: ${fetch("shells")}\n` +
        `**Electronegativity**: ${fetch("electronegativity_pauling")}\n` +
        `**Electron Affinity**: ${fetch("element.electron_affinity")}\n` +
        `**Ionization Energies**: ${fetch("ionization_energies")}\n\n` +
        `**Learn more:** [RSC](${rsclink}) | [PubChem](${pbclink}) | [NIST](${nistlink})`,
      footer: {
        text: fetch("electron_configuration"),
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
  const element = table.getElementByQuery(args[0]);
  return await msg.channel.createMessage(
    element
      ? elemEmbed(element)
      : {
          // error message if element is not found
          embed: {
            color: util.colorOf("help"), // to replace with client.config.colors.usage
            title: "Element not found.",
            description: `There are no elements with this name, symbol, or number: \`${args[0]}\``,
          },
        }
  );
};

export const full = new Command(names, desc, func, usage);
