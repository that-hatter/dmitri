import { Client, Message } from "eris";
import { Command } from "../modules/Command";
import * as config from "../config.json";
import * as util from "../modules/util";

const names = ["about", "dmitri"];
const desc = [
  "Displays information about the bot, including credits.",
  "You may also ping me to use this command.",
];

const func = async (
  args: string[],
  msg: Message,
  client: Client
): Promise<Message | void> => {
  const nodelink = "https://nodejs.org/en/";
  const tslink = "https://www.typescriptlang.org/";
  const erislink = "https://abal.moe/Eris/";
  const jsonlink = "https://github.com/Bowserinator/Periodic-Table-JSON";
  const avmlink = "https://images-of-elements.com/";
  const dmlink = "https://en.wikipedia.org/wiki/Dmitri_Mendeleev";
  const cpnglink =
    "https://www.cleanpng.com/png-sticker-vk-telegram-genius-person-telegram-sticker-6341296/";

  return await msg.channel.createMessage({
    embed: {
      color: util.colorOf("help"),
      title: "About Dmitri",
      description:
        "Hi! I'm a bot used to display various periodic table information." +
        `\nMy prefix is \`${config.prefix}\` and you can view a list of my commands using \`${config.prefix}commands\`.` +
        `\nUse \`${config.prefix}help <command>\` for additional help about a specific command.`,
      fields: [
        {
          name: "Credits",
          value:
            `I was developed by **Hatter#0106**. Yell at him if you see any issue!` +
            `\nI run on [nodeJS](${nodelink}) and was written using [TypeScript](${tslink}) and the [Eris](${erislink}) library.` +
            `\nI use [Bowserinator's periodic table JSON](${jsonlink}) as my database.` +
            `\nThe images are fetched from [Chemical Elements: A Virtual Museum](${avmlink}).` +
            `\nMy namesake is, of course, [Dmitri Mendeleev](${dmlink}), and my logo is from [CleanPNG](${cpnglink}).`,
        },
        {
          name: "Notice",
          value:
            "Currently, I am being self-hosted on a personal computer so I may not be available all the time." +
            " If demand or support increases, I may become fully online 24/7 in the future, with a bunch of new features." +
            " If you feel like supporting my development, or would like to help in hosting, please feel free to contact **Hatter**.",
        },
      ],
    },
  });
};

export const about = new Command(names, desc, func);
