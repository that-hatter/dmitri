"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sconf = exports.conf = exports.energies = exports.affinity = exports.negativity = exports.shells = exports.heat = exports.melt = exports.boil = exports.namer = exports.discoverer = exports.density = exports.block = exports.group = exports.period = exports.phase = exports.mass = exports.summary = exports.category = exports.number = exports.symbol = void 0;
var PropertyCommand_1 = require("../modules/PropertyCommand");
exports.symbol = new PropertyCommand_1.PropertyCommand(["symbol", "sym"], "Symbol", "symbol");
exports.number = new PropertyCommand_1.PropertyCommand(["number", "num", "Z"], "Atomic Number", "number");
exports.category = new PropertyCommand_1.PropertyCommand(["category", "cat"], "Category", "category");
exports.summary = new PropertyCommand_1.PropertyCommand(["summary", "summ"], "Summary", "summary");
exports.mass = new PropertyCommand_1.PropertyCommand(["mass"], "Atomic Mass", "atomic_mass");
exports.phase = new PropertyCommand_1.PropertyCommand(["phase"], "Phase at Standard Temperature and Pressure (STP)", "phase");
exports.period = new PropertyCommand_1.PropertyCommand(["period"], "Period", "period");
exports.group = new PropertyCommand_1.PropertyCommand(["group"], "Group", "group");
exports.block = new PropertyCommand_1.PropertyCommand(["block"], "Block", "block");
exports.density = new PropertyCommand_1.PropertyCommand(["density"], "Density", "density");
exports.discoverer = new PropertyCommand_1.PropertyCommand(["discoverer", "discoveredby"], "Discoverer", "discovered_by");
exports.namer = new PropertyCommand_1.PropertyCommand(["namer", "namedby"], "Namer", "named_by");
exports.boil = new PropertyCommand_1.PropertyCommand(["boil", "bp"], "Boiling Point", "boil");
exports.melt = new PropertyCommand_1.PropertyCommand(["melt", "mp"], "Melting Point", "melt");
exports.heat = new PropertyCommand_1.PropertyCommand(["heat", "mh"], "Molar Heat", "molar_heat");
exports.shells = new PropertyCommand_1.PropertyCommand(["shells"], "Electron Shells", "shells");
exports.negativity = new PropertyCommand_1.PropertyCommand(["negativity", "en"], "Electronegativity", "electronegativity_pauling");
exports.affinity = new PropertyCommand_1.PropertyCommand(["affinity", "ea"], "Electron Affinity", "electron_affinity");
exports.energies = new PropertyCommand_1.PropertyCommand(["energies", "ie"], "Ionization Energies", "ionization_energies");
exports.conf = new PropertyCommand_1.PropertyCommand(["conf"], "Electron Configuration", "electron_configuration");
exports.sconf = new PropertyCommand_1.PropertyCommand(["sconf"], "Electron Configuration (Semantic)", "electron_configuration_semantic");
