import { Command } from "../modules/Command"
import { info } from "./info";
import { help } from "./help";

const list = [
  info,
  help
];

const mapping: { [key: string]: Command } = {};
list.forEach(cmd => {
  for (const name of cmd.names) {
    mapping[name] = cmd;
  }
});

export const commands = { list, mapping };