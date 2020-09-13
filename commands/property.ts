import { Client, Message } from "eris";
import { PropertyCommand } from "../modules/PropertyCommand";

export const symbol = new PropertyCommand(
  ["symbol", "sym"],
  "Symbol",
  "symbol"
);
export const number = new PropertyCommand(
  ["number", "num", "Z"],
  "Atomic Number",
  "number"
);
export const category = new PropertyCommand(
  ["category", "cat"],
  "Category",
  "category"
);
export const summary = new PropertyCommand(
  ["summary", "summ"],
  "Summary",
  "summary"
);
export const mass = new PropertyCommand(["mass"], "Atomic Mass", "atomic_mass");
export const phase = new PropertyCommand(
  ["phase"],
  "Phase at Standard Temperature and Pressure (STP)",
  "phase"
);
export const period = new PropertyCommand(["period"], "Period", "period");
export const group = new PropertyCommand(["group", "gr"], "Group", "group");
export const block = new PropertyCommand(["block"], "Block", "block");
export const density = new PropertyCommand(["density"], "Density", "density");
export const discoverer = new PropertyCommand(
  ["discoverer", "discoveredby"],
  "Discoverer",
  "discovered_by"
);
export const namer = new PropertyCommand(
  ["namer", "namedby"],
  "Namer",
  "named_by"
);
export const boil = new PropertyCommand(
  ["boil", "bp"],
  "Boiling Point",
  "boil"
);
export const melt = new PropertyCommand(
  ["melt", "mp"],
  "Melting Point",
  "melt"
);
export const heat = new PropertyCommand(
  ["heat", "mh"],
  "Molar Heat",
  "molar_heat"
);
export const shells = new PropertyCommand(
  ["shells"],
  "Electron Shells",
  "shells"
);
export const negativity = new PropertyCommand(
  ["negativity", "neg"],
  "Electronegativity",
  "electronegativity_pauling"
);
export const affinity = new PropertyCommand(
  ["affinity", "aff"],
  "Electron Affinity",
  "electron_affinity"
);
export const energies = new PropertyCommand(
  ["energies", "ener"],
  "Ionization Energies",
  "ionization_energies"
);
export const conf = new PropertyCommand(
  ["conf"],
  "Electron Configuration",
  "electron_configuration"
);
export const sconf = new PropertyCommand(
  ["sconf"],
  "Electron Configuration (Semantic)",
  "electron_configuration_semantic"
);
export const links = new PropertyCommand(["links"], "Useful Links", "links");
