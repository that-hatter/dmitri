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
exports.list = void 0;
var Command_1 = require("../modules/Command");
var table = __importStar(require("../modules/tableQuery"));
var util = __importStar(require("../modules/util"));
var names = ["list", "filter"];
var desc = [
    "Lists all the elements that match the given `<filter>`",
    "You can use multiple filters separated by commas.",
    "A filter is one `<keyword>` followed by `=` and a corresponding `<value>`",
    "If the `<value>` is numerical, you can also set a range: `[min] to [max]`.",
    "Here is a list of available keywords:",
    "`period`, `group`, `category`, `phase`, `block`, `mass`, `num`, `neg`, `aff`, `den`, `mp`, `bp`, `heat`",
];
var usage = "<keyword> = <value | [min] to [max]>";
var func = function (args, msg, client) { return __awaiter(void 0, void 0, void 0, function () {
    var filters, list, listStr, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filters = args.length > 0 ? table.parseFilters(args) : [];
                list = table.getList(filters);
                listStr = "";
                for (i = 0; i < list.length; i++) {
                    if (!list[i].name)
                        continue;
                    listStr += list[i].name;
                    listStr += " ".repeat(14 - list[i].name.length);
                    if (i % 3 == 2 && i < list.length - 1)
                        listStr += "\n";
                }
                return [4 /*yield*/, msg.channel.createMessage(list.length > 0
                        ? {
                            embed: {
                                color: util.colorOf("help"),
                                title: "List of elements matching your filter:",
                                description: "```" + listStr + "```",
                                footer: {
                                    text: args.length > 0
                                        ? filters
                                            .map(function (f) {
                                            var val = f.range
                                                ? f.value
                                                    .split("to")
                                                    .map(function (x) { return x.trim(); })
                                                    .join(" to ")
                                                : f.value;
                                            return (f.property[0].toUpperCase() +
                                                f.property.substring(1) +
                                                ": " +
                                                val);
                                        })
                                            .join(" | ")
                                        : "All elements.",
                                },
                            },
                        }
                        : {
                            embed: {
                                color: util.colorOf("help"),
                                title: "No elements found.",
                                description: "Sorry, I couldn't find an element matching your filter." +
                                    " Recheck your query, or try using a different filter.",
                            },
                        })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.list = new Command_1.Command(names, desc, func, usage);
