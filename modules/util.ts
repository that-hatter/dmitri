import * as config from "../config.json";
import { commands } from "../commands/index";
import { Command } from "./Command";
import { ElemPropName } from "./Element";
import { number } from "../commands/property";

export interface Filter {
  prop: string;
  val1: number | string;
  val2?: number;
}

export const getCommand = (cmdName: string): Command | void => {
  return commands.mapping[cmdName];
};

export const colorOf = (type: string): number => {
  // defaults to gray if not in config file
  return Number(config.colors[type as keyof typeof config.colors]) || 0x808080;
};

const filterkeys = [
  "period",
  "group",
  "categ",
  "phase",
  "block",
  "mass",
  "number",
  "negativity",
  "affinity",
  "density",
  "melt",
  "boil",
  "heat",
];

const rangeables = [
  "period",
  "group",
  "number",
  "negativity",
  "affinity",
  "density",
  "boil",
  "melt",
  "heat",
];

export const parseFilters = (args: string[]): Filter[] => {
  const filterStrings = args.join("").split(",");
  const filters: Filter[] = [];

  for (const f of filterStrings) {
    let key: string;
    let val1: number | string;
    let val2: number | undefined;

    [key, val1] = f.split("=");
    if (!key || !val1 || !filterkeys.includes(key)) continue;

    [key, val1] = [key.trim(), val1.trim()];
    if (rangeables.includes(key)) {
      [val1, val2] = val1.split("to").map((v) => Number(v.trim()));
    }

    filters.push({
      prop: key.trim(),
      val1: val1,
      val2: val2,
    });
  }

  return filters;
};
