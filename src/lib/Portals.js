export const NAV_SECTIONS = [
  {
    label: "Intelligence",
    items: [
      { key: "dashboard", label: "Executive dashboard", path: "/dashboard", icon: "dashboard" },
      { key: "map", label: "Geographic overview", path: "/map", icon: "map" },
      { key: "alerts", label: "Risk intelligence", path: "/alerts", icon: "alerts" },
    ],
  },
  {
    label: "Agricultural registry",
    items: [
      { key: "farmers", label: "Farmers", path: "/farmers", icon: "farmers" },
      { key: "cooperatives", label: "Cooperatives & clusters", path: "/cooperatives", icon: "cooperatives" },
      { key: "batches", label: "Commodity batches", path: "/batches", icon: "batches" },
    ],
  },
  {
    label: "Quality & nutrition",
    items: [
      { key: "quality", label: "Food quality", path: "/quality", icon: "quality" },
      { key: "nutrition", label: "Community nutrition", path: "/nutrition", icon: "nutrition" },
      { key: "beneficiaries", label: "Beneficiaries", path: "/beneficiaries", icon: "beneficiaries" },
    ],
  },
  {
    label: "Household",
    items: [{ key: "household", label: "Household portal", path: "/household", icon: "household" }],
  },
  {
    label: "Institutions",
    items: [{ key: "stakeholders", label: "Partner organisations", path: "/stakeholders", icon: "stakeholders" }],
  },
  {
    label: "Accountability",
    items: [{ key: "impact", label: "Impact & reporting", path: "/impact", icon: "impact" }],
  },
];

export const PORTALS = [
  {
    id: "executive",
    name: "SciAg Super Administrator",
    short: "Super admin",
    organisation: "SciAg Agroscientific Limited",
    scope: "Central oversight of registries, quality, nutrition programmes and institutional reporting.",
    nav: ["dashboard", "map", "alerts", "farmers", "cooperatives", "batches", "quality", "nutrition", "beneficiaries", "impact", "stakeholders"],
  },
  {
    id: "field",
    name: "Agricultural Officer / Enumerator",
    short: "Field officer",
    organisation: "Field operations",
    scope: "Register farmers and cooperatives, record production and register commodity batches in the field.",
    nav: ["dashboard", "farmers", "cooperatives", "batches", "map"],
  },
  {
    id: "cooperative",
    name: "Cooperative Manager",
    short: "Cooperative",
    organisation: "Member cooperative",
    scope: "Manage members, monitor group production and record aggregation activity.",
    nav: ["dashboard", "farmers", "cooperatives", "batches", "impact"],
  },
  {
    id: "laboratory",
    name: "Laboratory Officer",
    short: "Laboratory",
    organisation: "Accredited laboratory",
    scope: "Record sample references and laboratory results, and submit them for verification.",
    nav: ["dashboard", "quality", "batches"],
  },
  {
    id: "quality",
    name: "Quality Assurance Officer",
    short: "Quality assurance",
    organisation: "Quality assurance unit",
    scope: "Review laboratory submissions, verify results and flag batches requiring assessment.",
    nav: ["dashboard", "quality", "batches", "alerts"],
  },
  {
    id: "nutrition",
    name: "Nutrition Programme Officer",
    short: "Nutrition",
    organisation: "Community nutrition programme",
    scope: "Record community nutrition indicators, beneficiary enrolment and food distribution coverage.",
    nav: ["dashboard", "nutrition", "beneficiaries", "map"],
  },
  {
    id: "partner",
    name: "NGO / Development Partner",
    short: "Development partner",
    organisation: "Development partner",
    scope: "Review approved programme coverage and verified impact indicators for shared communities.",
    nav: ["dashboard", "impact", "map", "alerts"],
  },
  {
    id: "public",
    name: "Read-only Public User",
    short: "Read only",
    organisation: "Public access",
    scope: "Aggregated agricultural and food-security indicators. Sensitive records stay restricted.",
    nav: ["dashboard", "map", "alerts"],
  },
  {
    id: "household",
    name: "Household Member",
    short: "Household",
    organisation: "Community household",
    scope: "Register your household, record what your family eats, report food shortages and find local nutrition support.",
    nav: ["household"],
  },
];

export const findPortal = (id) => PORTALS.find((p) => p.id === id) || PORTALS[0];

export const pathTitle = (pathname) => {
  const all = NAV_SECTIONS.flatMap((s) => s.items);
  const match = all.find((item) => pathname.startsWith(item.path));
  return match ? match.label : "NouriTrack";
};