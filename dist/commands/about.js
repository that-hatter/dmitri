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
exports.about = void 0;
var Command_1 = require("../modules/Command");
var config = __importStar(require("../config.json"));
var util = __importStar(require("../modules/util"));
var names = ["about", "dmitri"];
var desc = [
    "Displays information about the bot, including credits.",
    "You may also ping me to use this command.",
];
var func = function (args, msg, client) { return __awaiter(void 0, void 0, void 0, function () {
    var nodelink, tslink, erislink, jsonlink, avmlink, dmlink, cpnglink;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nodelink = "https://nodejs.org/en/";
                tslink = "https://www.typescriptlang.org/";
                erislink = "https://abal.moe/Eris/";
                jsonlink = "https://github.com/Bowserinator/Periodic-Table-JSON";
                avmlink = "https://images-of-elements.com/";
                dmlink = "https://en.wikipedia.org/wiki/Dmitri_Mendeleev";
                cpnglink = "https://www.cleanpng.com/png-sticker-vk-telegram-genius-person-telegram-sticker-6341296/";
                return [4 /*yield*/, msg.channel.createMessage({
                        embed: {
                            color: util.colorOf("help"),
                            title: "About Dmitri",
                            description: "Hi! I'm a bot used to display various periodic table information." +
                                ("\nMy prefix is `" + config.prefix + "` and you can view a list of my commands using `" + config.prefix + "commands`.") +
                                ("\nUse `" + config.prefix + "help <command>` for additional help about a specific command."),
                            fields: [
                                {
                                    name: "Credits",
                                    value: "I was developed by **Hatter#8137**. Yell at him if you see any issue!" +
                                        ("\nI run on [nodeJS](" + nodelink + ") and was written using [TypeScript](" + tslink + ") and the [Eris](" + erislink + ") library.") +
                                        ("\nI use [Bowserinator's periodic table JSON](" + jsonlink + ") as my database.") +
                                        ("\nThe images are fetched from [Chemical Elements: A Virtual Museum](" + avmlink + ").") +
                                        ("\nMy namesake is, of course, [Dmitri Mendeleev](" + dmlink + "), and my logo is from [CleanPNG](" + cpnglink + ")."),
                                },
                                {
                                    name: "Notice",
                                    value: "Currently, I am being self-hosted on a personal computer so I may not be available all the time." +
                                        " If demand or support increases, I may become fully online 24/7 in the future, with a bunch of new features." +
                                        " If you feel like supporting my development, or would like to help in hosting, please feel free to contact **Hatter**.",
                                },
                            ],
                        },
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.about = new Command_1.Command(names, desc, func);
