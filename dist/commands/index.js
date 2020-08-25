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
var info_1 = require("./info");
var help_1 = require("./help");
var full_1 = require("./full");
var hello_1 = require("./hello");
var property = __importStar(require("./property"));
var list = [
    info_1.info,
    help_1.help,
    full_1.full,
    hello_1.hello
];
for (var p in property) {
    list.push(property[p]);
}
var mapping = {};
list.forEach(function (cmd) {
    for (var _i = 0, _a = cmd.names; _i < _a.length; _i++) {
        var name_1 = _a[_i];
        mapping[name_1] = cmd;
    }
});
exports.commands = { list: list, mapping: mapping };
