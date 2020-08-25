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
exports.getProperty = exports.getBlock = exports.getGroup = exports.getPropUnit = exports.getElementByQuery = exports.getElementWithProp = exports.getElementWithName = void 0;
//=========================================================//
// List of functions used to query the periodic table json
// Might convert it to a PeriodicTable class in the future, 
// along with an Element class. For now, I simply add in
// functions when I need them.
//========================================================//
var elements = __importStar(require("../data/elements.json"));
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
//=========================================================//
// Element functions
//=========================================================//
exports.getPropUnit = function (elem, prop) {
    if (prop === "atomic_mass")
        return "u";
    if (prop === "molar_heat")
        return "mol-K";
    if (prop === "boil" || prop === "melt")
        return "K";
    if (prop === "density")
        return elem.phase === "Gas" ? "g/L" : "g/cm³";
};
exports.getGroup = function (element) {
    if (element.ypos < 9)
        return element.xpos; // lanthanides and actinides have no groups
};
exports.getBlock = function (element) {
    if (element.ypos > 8)
        return "f-block";
    if (element.xpos < 3 || element.name === "helium")
        return "s-block";
    if (element.xpos < 13)
        return "d-block";
    return "p-block";
};
exports.getProperty = function (elem, prop) {
    // group and block need to be calculated as they're not in the json
    if (prop === "group")
        return String(exports.getGroup(elem));
    if (prop === "block")
        return exports.getBlock(elem);
    var val = elem[prop];
    if (Array.isArray(val))
        return val = val.join(", ");
    if (val) {
        var unit = exports.getPropUnit(elem, prop);
        return unit ? (val + " " + unit) : val;
    }
    return "`N/A`";
};
