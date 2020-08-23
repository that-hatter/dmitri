import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as util from "../modules/util";

const elemEmbed = (element: util.Element) => {
  return {
    embed: {
      title: element.name,
      description: element.summary,
      url: element.source,
      color: util.colorOf(element.category),
      // thumbnail: { 
      //   url: `https://images-of-elements.com/${element.name.toLowerCase()}.jpg`
      // },
      fields: [
        { name: "Symbol", value: element.symbol, inline: true },
        { name: "Number", value: String(element.number), inline: true },
        { name: "Mass",   value: String(element.atomic_mass), inline: true },
        { name: "Category", value: element.category, inline: true },
        { name: "Period", value: String(element.period), inline: true },
        { name: "Group",  value: String(element.xpos), inline: true },
      ],
      footer: {
        // icon_url: "https://png2.cleanpng.com/dy/f813124283957a3eff8114177b2eda08/L0KzQYm3U8E4N5xpfZH0aYP2gLBuTfVtbZR5itH3LX3sc8P2kBNweJYyeeZ4bT3mfLr3TfFzfF5qhNdsdILyfn7qjPlxaaN5i58AYXHncrfohcE5aZVrSJC5NEO1QoiCV8E2OmI4S6g7M0i0QIK4TwBvbz==/kisspng-electron-microscope-atom-clip-art-electron-cliparts-5aadbfae18adf0.0432279715213362381011.png";
        text: element.electron_configuration_semantic,
      }
    }
  }
}

const names = ["info", "?", "basic"];
const desc = "Displays basic information regarding an element including a summary and an image.";
const usage = ["ELEMENT", "Here, `ELEMENT` can be the name, symbol, or atomic number of your desired element. Both name and symbol are not case-sensitive."];

const func = async (args: string[], msg: Message, client: Client): Promise<Message | void> => {
  if (args.length < 1) return;
  const element = util.getElementByQuery(args[0]);
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

export const info = new Command(names, desc, func, usage);