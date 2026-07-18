import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const readProjectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const contentSource = readProjectFile("src/content/siteContent.ts");
const appSource = readProjectFile("src/main.tsx");
const stylesSource = readProjectFile("src/styles.css");
const expectedTitle =
  "From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit";
const iflaProjectTitle =
  "Greenery and Wind: Landscape Strategies for Air Pollution Mitigation Along the NYC Marathon Route";

assert.equal(contentSource.split(expectedTitle).length - 1, 4, "Paper 03 title must appear in four bilingual entries");
assert.equal(contentSource.includes("Cooxling"), false, "Old Paper 03 typo must be removed");
assert.equal(contentSource.includes("researchInterests"), false, "Research Interests content must be removed");
assert.equal(contentSource.includes('research: "研究兴趣"'), false, "Chinese section label must be removed");
assert.equal(contentSource.includes('research: "Research Interests"'), false, "English section label must be removed");
assert.equal(appSource.includes("InterestSection"), false, "Research Interests component must be removed");
assert.equal(stylesSource.includes(".interest-grid"), false, "Research Interests grid styles must be removed");
assert.equal(stylesSource.includes(".organic-card"), false, "Research Interests card styles must be removed");
assert.ok(contentSource.includes("2026 IFLA 全球风景园林奖"), "Chinese IFLA award wording must be present");
assert.ok(contentSource.includes("IFLA Global Landscape Architecture Awards 2026"), "English IFLA award wording must be present");
assert.ok(contentSource.includes("Finalist (Top 3 Worldwide)"), "IFLA finalist status must be present");
assert.ok(contentSource.includes("Student Category—Urban Health and Well-being"), "IFLA category must be present");
assert.ok(contentSource.includes(iflaProjectTitle), "IFLA project title must be present");
assert.ok(contentSource.includes("2/7"), "IFLA contribution order must be present");

console.log("Site content verification passed.");
