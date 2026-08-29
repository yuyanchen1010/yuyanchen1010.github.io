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
const chineseIflaCompetitionEntry =
  "2026.05-2026.06：2026 IFLA全球风景园林奖｜学生组“城市健康与福祉”类别全球三强入围（2/7）";
const englishIflaCompetitionEntry =
  "May 2026-Jun 2026: Finalist (Top 3 Worldwide), Student Category—Urban Health and Well-being, IFLA Global Landscape Architecture Awards 2026 (2/7).";

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
assert.ok(contentSource.includes(chineseIflaCompetitionEntry), "Chinese IFLA competition entry must use the requested concise date range");
assert.ok(contentSource.includes(englishIflaCompetitionEntry), "English IFLA competition entry must use the concise date range");
assert.ok(contentSource.includes("雅思 7.5 分"), "Chinese introduction must include the IELTS score");
assert.ok(appSource.includes('"雅思 7.5 分"'), "Chinese IELTS score must be bolded");
assert.ok(contentSource.includes('{ date: "2026.08"'), "Chinese IELTS news must be the newest item");
assert.ok(contentSource.includes("听力 7.5 分、阅读 9 分、口语 6.5 分、写作 6.5 分"), "Chinese IELTS section scores must be present");
assert.equal(contentSource.split("https://github.com/yuyanchen1010").length - 1, 2, "Both language profiles must link to the GitHub account");

console.log("Site content verification passed.");
