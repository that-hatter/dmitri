//=========================================================//
// List of functions used to query the periodic table json
// Might convert it to a PeriodicTable class in the future, 
// along with an Element class. For now, I simply add in
// functions when I need them.
//========================================================//
import * as elements from "../data/elements.json";

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

//=========================================================//
// Element functions
//=========================================================//

export const getPropUnit = (elem: Element, prop: string): string | void => {
  if (prop === "atomic_mass") return "u";
  if (prop === "molar_heat") return "mol-K";
  if (prop === "boil" || prop === "melt") return "K";
  if (prop === "density") return elem.phase === "Gas" ? "g/L": "g/cm³";
}

export const getGroup = (element: Element): number | void => {
  if (element.ypos < 9) return element.xpos; // lanthanides and actinides have no groups
}

export const getBlock = (element: Element): string => {
  if (element.ypos > 8) return "f-block";
  if (element.xpos < 3 || element.name === "helium") return "s-block";
  if (element.xpos < 13) return "d-block";
  return "p-block";
}

export const getProperty = (elem: Element, prop: string): string => {
  // group and block need to be calculated as they're not in the json
  if (prop === "group") return String(getGroup(elem));
  if (prop === "block") return getBlock(elem);

  let val: any = elem[prop as ElemPropName];
  if (Array.isArray(val)) return val = val.join(", ");
  if (val) {
    const unit = getPropUnit(elem, prop);
    return unit ? (val + " " + unit) : val;
  }
  return "`N/A`";
}