"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.full = void 0;
var Command_1 = require("../modules/Command");
var config = __importStar(require("../config.json"));
var util = __importStar(require("../modules/util"));
var table = __importStar(require("../modules/tableQuery"));
var elemEmbed = function (element) {
    var fetch = function (prop) { return table.getProperty(element, prop); };
    var rsclink = "https://www.rsc.org/periodic-table/element/" + fetch("number");
    var pbclink = "https://pubchem.ncbi.nlm.nih.gov/element/" + fetch("number");
    var nistlink = "https://webbook.nist.gov/cgi/inchi/InChI%3D1S/" + fetch("symbol");
    return {
        embed: {
            title: fetch("number") + " | " + fetch("name") + " (" + fetch("symbol") + ")",
            url: fetch("source"),
            color: util.colorOf(fetch("category")),
            description: "**Mass**: " + fetch("atomic_mass") + " | **Phase at STP**: " + fetch("phase") + "\n"
                + ("**Period**: " + fetch("period") + " | **Group**: " + fetch("group") + " | **Block**: " + fetch("block") + "\n")
                + ("**Density**: " + fetch("density") + "\n")
                + ("**Category**: " + fetch("category") + "\n")
                + ("**Discovered By**: " + fetch("discovered_by") + "\n")
                + ("**Named by**: " + fetch("named by") + "\n")
                + ("**Boiling Point**: " + fetch("boil") + "\n")
                + ("**Melting Point**: " + fetch("melt") + "\n")
                + ("**Molar Heat**: " + fetch("molar_heat") + "\n")
                + ("**Electron Shells**: " + fetch("shells") + "\n")
                + ("**Electronegativity**: " + fetch("electronegativity_pauling") + "\n")
                + ("**Electron Affinity**: " + fetch("element.electron_affinity") + "\n")
                + ("**Ionization Energies**: " + fetch("ionization_energies") + "\n\n")
                + ("**Learn more:** [RSC](" + rsclink + ") | [PubChem](" + pbclink + ") | [NIST](" + nistlink + ")"),
            footer: {
                icon_url: "https://png2.cleanpng.com/dy/f813124283957a3eff8114177b2eda08/L0KzQYm3U8E4N5xpfZH0aYP2gLBuTfVtbZR5itH3LX3sc8P2kBNweJYyeeZ4bT3mfLr3TfFzfF5qhNdsdILyfn7qjPlxaaN5i58AYXHncrfohcE5aZVrSJC5NEO1QoiCV8E2OmI4S6g7M0i0QIK4TwBvbz==/kisspng-electron-microscope-atom-clip-art-electron-cliparts-5aadbfae18adf0.0432279715213362381011.png",
                text: fetch("electron_configuration"),
            }
        }
    };
};
var names = ["full", config.prefix + config.prefix];
var desc = [
    "Displays more extensive data about the specified `<element>`.",
    "`<element>` can be the name, symbol, or atomic number.",
    "Both name and symbol are not case-sensitive."
];
var usage = "<element>";
var func = function (args, msg, client) { return __awaiter(void 0, void 0, void 0, function () {
    var element;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (args.length < 1)
                    return [2 /*return*/];
                element = table.getElementByQuery(args[0]);
                return [4 /*yield*/, msg.channel.createMessage(element ? elemEmbed(element) : {
                        // error message if element is not found
                        embed: {
                            color: util.colorOf("help"),
                            title: "Element not found.",
                            description: "There are no elements with this name, symbol, or number: `" + args[0] + "`",
                        }
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.full = new Command_1.Command(names, desc, func, usage);
