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
exports.getElementByQuery = exports.getElementWithProp = exports.getElementWithName = exports.colorOf = exports.getCommand = void 0;
var elements = __importStar(require("../data/elements.json"));
var config = __importStar(require("../config.json"));
var index_1 = require("../commands/index");
exports.getCommand = function (cmdName) {
    return index_1.commands.mapping[cmdName];
};
exports.colorOf = function (type) {
    return Number(config.colors[type]) || 0x808080;
};
exports.getElementWithName = function (name) {
    return elements[name];
};
exports.getElementWithProp = function (prop, val) {
    for (var e in elements) {
        var element = elements[e];
        var propVal = element[prop];
        if (typeof propVal === "string")
            propVal = propVal.toLowerCase();
        if (propVal === val)
            return element;
    }
};
exports.getElementByQuery = function (query) {
    return isNaN(Number(query))
        ? exports.getElementWithName(query) || exports.getElementWithProp("symbol", query)
        : exports.getElementWithProp("number", Number(query));
};
