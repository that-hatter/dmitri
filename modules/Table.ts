import { Element } from "./Element";
import * as elements from "../data/elements.json";
import { ElemPropName } from "./Element";
import { Filter } from "./util";

export class Table {
  public readonly elements: Map<string, Element>;
  public readonly filters: Filter[];

  constructor(data?: Table | typeof elements) {
    this.elements = new Map();
    this.filters = [];
    if (data) {
      if (data instanceof Table) {
        for (const [name, elem] of data.elements) {
          this.elements.set(name, elem);
        }
      } else {
        for (const name in data) {
          const raw = data[name as keyof typeof data];
          if (raw && raw.name && raw.number) {
            const element = new Element(raw);
            this.elements.set(element.name || "", element);
          }
        }
      }
    }
  }

  public clone = (): Table => {
    return new Table(this);
  };

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

  public getRandom = (): Element | void => {
    const ind = Math.floor(Math.random() * (this.elements.size - 1));
    return [...this.elements][ind][1];
  };

  public filter(filters: Filter[]): Table {
    for (const [name, elem] of this.elements) {
      if (!elem.isPassAllFilters(filters)) {
        this.elements.delete(name);
      }
    }
    this.filters.push(...filters);
    return this;
  }

  public newFiltered(filters: Filter[]) {
    return this.clone().filter(filters);
  }
}

export const periodic = new Table(elements);
