import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as config from "../config.json";
import * as util from "../modules/util";
import * as table from "../modules/tableQuery";

const elemEmbed = (element: table.Element) => {
  const fetch = (prop: string) => table.getProperty(element, prop);
  return {
    embed: {
      title: fetch("name"),
      description: fetch("summary"),
      url: fetch("source"),
      color: util.colorOf(fetch("category")),
      thumbnail: { url: `https://images-of-elements.com/${ fetch("name").toLowerCase() }.jpg` },
      fields: [
        { name: "Symbol", value: fetch("symbol"), inline: true },
        { name: "Number", value: fetch("number"), inline: true },
        { name: "Mass",   value: fetch("atomic_mass") + " u", inline: true },
        { name: "Period", value: fetch("period"), inline: true },
        { name: "Group",  value: fetch("group"), inline: true },
        { name: "Category", value: fetch("category"), inline: true },
      ],
      footer: {
        icon_url: "https://png2.cleanpng.com/dy/f813124283957a3eff8114177b2eda08/L0KzQYm3U8E4N5xpfZH0aYP2gLBuTfVtbZR5itH3LX3sc8P2kBNweJYyeeZ4bT3mfLr3TfFzfF5qhNdsdILyfn7qjPlxaaN5i58AYXHncrfohcE5aZVrSJC5NEO1QoiCV8E2OmI4S6g7M0i0QIK4TwBvbz==/kisspng-electron-microscope-atom-clip-art-electron-cliparts-5aadbfae18adf0.0432279715213362381011.png",
        text: fetch("electron_configuration_semantic"),
      }
    }
  }
}

const names = ["basic", config.prefix ];
const desc = [
  "Displays basic information regarding the specified `<element>`.",
  "`<element>` can be the name, symbol, or atomic number.",
  "Both name and symbol are not case-sensitive."
];
const usage = "<element>";

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  if (args.length < 1) return;
  const element = table.getElementByQuery(args[0]);
  return await msg.channel.createMessage(
    element ? elemEmbed(element) : {
      // error message if element is not found
      embed: {
        color: util.colorOf("help"), // to replace with client.config.colors.usage
        title: "Element not found.",
        description: `There are no elements with this name, symbol, or number: \`${ args[0] }\``,
      }
    }
  );
}

export const basic = new Command(names, desc, func, usage);