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
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var help_1 = require("./help");
var commands_1 = require("./commands");
var basic_1 = require("./basic");
var full_1 = require("./full");
var list_1 = require("./list");
var rand_1 = require("./rand");
var property = __importStar(require("./property"));
var arr = [
    help_1.help,
    commands_1.cmd,
    basic_1.basic,
    full_1.full,
    list_1.list,
    rand_1.rand
];
for (var p in property) {
    arr.push(property[p]);
}
var mapping = {};
arr.forEach(function (cmd) {
    for (var _i = 0, _a = cmd.names; _i < _a.length; _i++) {
        var name_1 = _a[_i];
        mapping[name_1] = cmd;
    }
});
exports.commands = { arr: arr, mapping: mapping };
