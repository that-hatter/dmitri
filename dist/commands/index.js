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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var help_1 = require("./help");
var commands_1 = require("./commands");
var basic_1 = require("./basic");
var full_1 = require("./full");
var list_1 = require("./list");
var rand_1 = require("./rand");
var about_1 = require("./about");
var property = __importStar(require("./property"));
var arr = [help_1.help, commands_1.cmd, about_1.about, basic_1.basic, full_1.full, list_1.list, rand_1.rand];
for (var p in property) {
    arr.push(property[p]);
}
var mapping = {};
arr.forEach(function (cmd) {
    var e_1, _a;
    try {
        for (var _b = __values(cmd.names), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_1 = _c.value;
            mapping[name_1] = cmd;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
exports.commands = { arr: arr, mapping: mapping };
