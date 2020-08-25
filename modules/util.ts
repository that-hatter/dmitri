import * as config from "../config.json";
import { commands } from "../commands/index";
import { Command } from "./Command";

export const getCommand = (cmdName: string): Command | void => {
  return commands.mapping[cmdName];
}

export const colorOf = (type: string): number => { // defaults to gray if not in config file
  return Number(config.colors[type as keyof typeof config.colors]) || 0x808080;
}