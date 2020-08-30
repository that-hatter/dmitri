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


export type Filter = {
  property: string;
  value: string;
  range: boolean;
}

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

export const getMaxZ = (): number => {
  // TODO: optimize this to be only loaded once on start-up,
  // esp. as a field in a PeriodicTable class
  let count = 0;
  for (const k in elements) count++;
  return count;
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
  if (element.ypos > 8) return "f";
  if (element.xpos < 3 || element.name === "helium") return "s";
  if (element.xpos < 13) return "d";
  return "p";
}

export const getProperty = (elem: Element, prop: string): string => {
  // group and block need to be calculated as they're not in the json
  if (prop === "group") return String(getGroup(elem));
  if (prop === "block") return getBlock(elem);
  if (prop === "links") {
    const rsclink = "https://www.rsc.org/periodic-table/element/" + getProperty(elem, "number");
    const pbclink = "https://pubchem.ncbi.nlm.nih.gov/element/" + getProperty(elem, "number");
    const nistlink = "https://webbook.nist.gov/cgi/inchi/InChI%3D1S/" + getProperty(elem, "symbol");
    const imglink = "https://images-of-elements.com/" + getProperty(elem, "name").toLowerCase() + ".php";

    return "\n[The Royal Society of Chemistry](" + rsclink + ")"
      + "\n[PubChem](" + pbclink + ")"
      + "\n[NIST Chemistry Webbook](" + nistlink + ")"
      + "\n[Chemical Elements: A Virtual Museum](" + imglink + ")";
  }

  let val: any = elem[prop as ElemPropName];
  if (Array.isArray(val)) return val = val.join(", ");
  if (val) {
    const unit = getPropUnit(elem, prop);
    return unit ? (val + " " + unit) : val;
  }
  return "`N/A`";
}

//=========================================================//
// Filtering and listing
//=========================================================//

export const filterCheck = (filter: Filter, element: Element): boolean => {
  let val = getProperty(element, filter.property);

  if (filter.range && val && !isNaN(Number(val))) {
    const [min, max] = filter.value.split("to").map(n => Number(n.trim()));
    return min <= Number(val) && max >= Number(val);
  }
  if (typeof val === "number") return Number(filter.value) === val;
  if (filter.value === "unknown") {
    return (filter.property === "category" && typeof val === "string") 
      ? val.startsWith("unknown") : !val;
  }

  return val === filter.value;
}

export const isPassAllFilters = (filters: Filter[], element: Element): boolean => {
  for (const f of filters) {
    if (!filterCheck(f, element)) return false;
  }
  return true;
}

export const getList = (filters: Filter[]): Element[] => {
  const out: Element[] = [];
  for (const k in elements) {
    const element = elements[k as ElemName];
    if (isPassAllFilters(filters, element)) out.push(element);
  }
  return out;
}