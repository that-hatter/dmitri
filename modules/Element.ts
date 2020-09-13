import * as elements from "../data/elements.json";

type Propertyof<T> = T[keyof T];
export type ElemPropName = keyof Element;
export type ElemPropVal = Propertyof<Element>;

export class Element {
  public readonly name: null | string;
  public readonly appearance: null | string;
  public readonly mass: null | number;
  public readonly boil: null | number;
  public readonly categ: null | string;
  public readonly color: null | string;
  public readonly density: null | number;
  public readonly discoverer: null | string;
  public readonly melt: null | number;
  public readonly heat: null | number;
  public readonly namer: null | string;
  public readonly number: null | number;
  public readonly period: null | number;
  public readonly phase: null | string;
  public readonly source: null | string;
  public readonly spectral: null | string;
  public readonly summary: null | string;
  public readonly symbol: null | string;
  public readonly xpos: null | number;
  public readonly ypos: null | number;
  public readonly shells: null | number[];
  public readonly conf: null | string;
  public readonly sconf: null | string;
  public readonly affinity: null | number;
  public readonly negativity: null | number;
  public readonly energies: null | number[];
  public readonly block: null | string;
  public readonly group: null | number;
  public readonly rsclink: string;
  public readonly pbclink: string;
  public readonly nstlink: string;
  public readonly imglink: string;

  constructor(elraw: Propertyof<typeof elements>) {
    // direct from raw
    this.name = elraw.name;
    this.appearance = elraw.appearance;
    this.mass = elraw.atomic_mass;
    this.boil = elraw.boil;
    this.categ = elraw.category;
    this.color = elraw.color;
    this.density = elraw.density;
    this.discoverer = elraw.discovered_by;
    this.melt = elraw.melt;
    this.heat = elraw.molar_heat;
    this.namer = elraw.named_by;
    this.number = elraw.number;
    this.period = elraw.period;
    this.phase = elraw.phase;
    this.source = elraw.source;
    this.spectral = elraw.spectral_img;
    this.summary = elraw.summary;
    this.symbol = elraw.symbol;
    this.xpos = elraw.xpos;
    this.ypos = elraw.ypos;
    this.shells = elraw.shells;
    this.conf = elraw.electron_configuration;
    this.sconf = elraw.electron_configuration_semantic;
    this.affinity = elraw.electron_affinity;
    this.negativity = elraw.electronegativity_pauling;
    this.energies = elraw.ionization_energies;

    // computed
    this.group = this.ypos && this.ypos < 9 ? this.xpos : null;

    if (this.ypos > 8) this.block = "f";
    else if (this.xpos < 3 || this.name === "helium") this.block = "s";
    else if (this.xpos < 13) this.block = "d";
    else this.block = "p";

    this.rsclink = "https://www.rsc.org/periodic-table/element/" + this.number;
    this.pbclink = "https://pubchem.ncbi.nlm.nih.gov/element/" + this.number;
    this.nstlink =
      "https://webbook.nist.gov/cgi/inchi/InChI%3D1S/" + this.symbol;
    this.imglink =
      "https://images-of-elements.com/" + this.name.toLowerCase() + ".php";
  }

  public getPropUnit = (prop: string): string | void => {
    if (prop === "atomic_mass") return "u";
    if (prop === "molar_heat") return "mol-K";
    if (prop === "boil" || prop === "melt") return "K";
    if (prop === "density") return this.phase === "Gas" ? "g/L" : "g/cm³";
  };

  public getPropertyString(prop: string): string {
    if (prop === "links") {
      return `[The Royal Society of Chemestry](${this.rsclink})
        [PubChem](${this.pbclink})
        [NIST Chemistry Webbook](${this.nstlink})
        [Chemical Elements: A Virtual Museum](${this.imglink})
        `;
    }
    const val: ElemPropVal = this[prop as ElemPropName];
    if (val) {
      if (val instanceof Function)
        throw new Error("Tried to print a function.");
      if (Array.isArray(val)) return val.join(", ");
      const unit = this.getPropUnit(prop);
      return unit ? val + " " + unit : String(val);
    }
    return "`N/A`";
  }
}
