import { Element } from "./Element";
import * as elements from "../data/elements.json";
import { ElemPropName } from "./Element";

export class Table {
  private elements: Map<string, Element>;

  constructor(json: typeof elements) {
    this.elements = new Map();
    for (const name in json) {
      const raw = json[name as keyof typeof json];
      if (raw && raw.name && raw.number) {
        const element = new Element(raw);
        this.elements.set(element.name || "", element);
      }
    }
  }

  public getElementByName = (name: string): Element | void => {
    return this.elements.get(name);
  };

  public getElementByProp = (
    prop: string,
    val: string | number
  ): Element | void => {
    for (const [_, e] of this.elements) {
      const propVal = e[prop as ElemPropName];
      if (
        (typeof propVal === "string" && val == propVal.toLowerCase()) ||
        propVal === val
      )
        return e;
    }
  };

  public getElement = (query: string): Element | void => {
    return isNaN(Number(query))
      ? this.getElementByName(query) || this.getElementByProp("symbol", query)
      : this.getElementByProp("number", Number(query));
  };
}

export const fullTable = new Table(elements);
