import { PropertyCommand } from "../modules/PropertyCommand";

export const symbol = new PropertyCommand(["symbol", "sym"], "Symbol");
export const number = new PropertyCommand(
  ["number", "num", "Z"],
  "Atomic Number"
);
export const category = new PropertyCommand(["categ", "cat"], "Category");
export const summary = new PropertyCommand(["summary", "summ"], "Summary");
export const mass = new PropertyCommand(["mass"], "Atomic Mass");
export const phase = new PropertyCommand(["phase"], "Phase at STP");
export const period = new PropertyCommand(["period"], "Period");
export const group = new PropertyCommand(["group", "gr"], "Group");
export const block = new PropertyCommand(["block"], "Block");
export const density = new PropertyCommand(["density"], "Density");
export const discoverer = new PropertyCommand(
  ["discoverer", "discoveredby"],
  "Discoverer"
);
export const namer = new PropertyCommand(["namer", "namedby"], "Namer");
export const boil = new PropertyCommand(["boil", "bp"], "Boiling Point");
export const melt = new PropertyCommand(["melt", "mp"], "Melting Point");
export const heat = new PropertyCommand(["heat", "mh"], "Molar Heat");
export const shells = new PropertyCommand(["shells"], "Electron Shells");
export const negativity = new PropertyCommand(
  ["negativity", "neg"],
  "Electronegativity"
);
export const affinity = new PropertyCommand(
  ["affinity", "aff"],
  "Electron Affinity"
);
export const energies = new PropertyCommand(
  ["energies", "ener"],
  "Ionization Energies"
);
export const conf = new PropertyCommand(["conf"], "Electron Configuration");
export const sconf = new PropertyCommand(
  ["sconf"],
  "Electron Configuration (Semantic)"
);
export const links = new PropertyCommand(["links"], "Useful Links");
