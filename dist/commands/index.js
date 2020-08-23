"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var info_1 = require("./info");
var help_1 = require("./help");
var list = [
    info_1.info,
    help_1.help
];
var mapping = {};
list.forEach(function (cmd) {
    for (var _i = 0, _a = cmd.names; _i < _a.length; _i++) {
        var name_1 = _a[_i];
        mapping[name_1] = cmd;
    }
});
exports.commands = { list: list, mapping: mapping };
