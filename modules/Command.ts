import { Message, Client } from "eris";
import * as util from "./util";
import * as config from "../config.json";

export class Command {
  public readonly names: string[];
  public readonly desc: string;
  public readonly func: (args: string[], msg: Message, client: Client) => Promise<void | Message>;
  public readonly usage?: string[];

  constructor (
    names: string[], 
    desc: string,
    func: (args: string[], msg: Message, client: Client) => Promise<void | Message>,
    usage?: string[]
  ) {
    this.names = names;
    this.desc = desc;
    this.func = func;
    this.usage = usage;
  }

  public async exec(args: string[], msg: Message, client: Client) {
    try {
      return await this.func(args, msg, client);
    } catch (err) {
      console.log(err);
    }
  }

  public async showHelp(msg: Message) {
    const label = this.names[0];
    const embedFields = []

    if (this.usage) {
      let val = `\`${ config.prefix + label } ${ this.usage[0] }\``;
      for (let i = 1; i < this.usage.length; i++) {
        val += `\n${ this.usage[i] }`;
      }
      embedFields.push({
        name: "Usage:",
        value: val,
        inline: false
      });
    }

    if (this.names.length > 1) {
      embedFields.push({
        name: "Aliases:", 
        value: this.names.map(nm => `\`${ nm }\``).join(", ").slice(this.names.length + 4),
        inline: false 
      })
    }

    return await msg.channel.createMessage({
      embed: {
        color: util.colorOf("help"),
        title: `__${ config.prefix + label }__`,
        description: this.desc,
        fields: embedFields
      }
    });
  }

}