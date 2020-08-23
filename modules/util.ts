import * as elements from "../data/elements.json";
import * as config from "../config.json";
import { commands } from "../commands/index";
import { Command } from "./Command";

export const getCommand = (cmdName: string): Command | void => {
  return commands.mapping[cmdName];
}

export const colorOf = (type: string): number => { // defaults to gray if not in config file
  return Number(config.colors[type as keyof typeof config.colors]) || 0x808080;
}

export type Propertyof<T> = T[keyof T];
export type ElemName = keyof typeof elements;
export type Element = Propertyof<typeof elements>;
export type ElemPropName = keyof Element;
export type ElemProp = Propertyof<Element>;

export const getElementWithName = (name: string): Element | void => {
  return elements[name as ElemName];
}

export const getElementWithProp = (prop: string, val: string | number): Element | void => {
  for (const e in elements) {
    const element = elements[e as ElemName];
    let propVal = element[prop as ElemPropName];
    if (typeof propVal === "string") propVal = propVal.toLowerCase();
    if (propVal === val) return element;
  }
}

export const getElementByQuery = (query: string): Element | void => {
  return isNaN(Number(query))
    ? getElementWithName(query) || getElementWithProp("symbol", query)
    : getElementWithProp("number", Number(query));
}