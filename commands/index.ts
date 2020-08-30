import { Command } from "../modules/Command"
import { help } from "./help";
import { cmd } from "./commands";
import { basic } from "./basic";
import { full } from "./full";
import { list } from "./list";
import { rand } from "./rand";
import * as property from "./property";

const arr = [
  help,
  cmd,
  basic,
  full,
  list,
  rand
];

for (const p in property) {
  arr.push(property[p as keyof typeof property]);
}

const mapping: { [key: string]: Command } = {};
arr.forEach(cmd => {
  for (const name of cmd.names) {
    mapping[name] = cmd;
  }
});

export const commands = { arr, mapping };