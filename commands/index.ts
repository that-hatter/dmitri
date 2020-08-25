import { Command } from "../modules/Command"
import { info } from "./info";
import { help } from "./help";
import { full } from "./full";
import { hello } from "./hello";
import * as property from "./property"

const list = [
  info,
  help,
  full,
  hello
];

for (const p in property) {
  list.push(property[p as keyof typeof property]);
}

const mapping: { [key: string]: Command } = {};
list.forEach(cmd => {
  for (const name of cmd.names) {
    mapping[name] = cmd;
  }
});

export const commands = { list, mapping };