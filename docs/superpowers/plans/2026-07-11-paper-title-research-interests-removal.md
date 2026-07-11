# Paper Title and Research Interests Removal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a bilingual site where every Paper 03 reference uses the corrected Cooling title and the Research Interests section no longer exists.

**Architecture:** Keep content in `siteContent.ts`, rendering in `main.tsx`, and section-specific presentation in `styles.css`. Add a dependency-free Node verification script that asserts the bilingual content and source structure, then rebuild Vite and replace the GitHub Pages assets.

**Tech Stack:** React 19, TypeScript 5.7, Vite 6, Node.js built-in `assert` and `fs`, GitHub Pages.

## Global Constraints

- The canonical title is exactly `From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit`.
- Update the Chinese and English Paper 03 cards and news entries, for four total title occurrences.
- Remove the Research Interests render call, component, bilingual data, section labels, and dedicated CSS.
- Preserve every other site section and all Paper 03 role, journal, description, links, and tags.
- Keep `D:/code/cyy_website_project/project` and `.deploy-repo/project` source copies identical.

---

### Task 1: Add a Failing Content Regression Check

**Files:**
- Create: `D:/code/cyy_website_project/project/scripts/verify-site-content.mjs`
- Create: `D:/code/cyy_website_project/.deploy-repo/project/scripts/verify-site-content.mjs`
- Modify: `D:/code/cyy_website_project/project/package.json`
- Modify: `D:/code/cyy_website_project/.deploy-repo/project/package.json`

**Interfaces:**
- Consumes: the literal source text in `src/content/siteContent.ts`, `src/main.tsx`, and `src/styles.css`.
- Produces: `npm.cmd run test:content`, which exits nonzero on stale Paper 03 or Research Interests source.

- [ ] **Step 1: Create the verification script**

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const readProjectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const contentSource = readProjectFile("src/content/siteContent.ts");
const appSource = readProjectFile("src/main.tsx");
const stylesSource = readProjectFile("src/styles.css");
const expectedTitle =
  "From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit";

assert.equal(contentSource.split(expectedTitle).length - 1, 4, "Paper 03 title must appear in four bilingual entries");
assert.equal(contentSource.includes("Cooxling"), false, "Old Paper 03 typo must be removed");
assert.equal(contentSource.includes("researchInterests"), false, "Research Interests content must be removed");
assert.equal(contentSource.includes('research: "研究兴趣"'), false, "Chinese section label must be removed");
assert.equal(contentSource.includes('research: "Research Interests"'), false, "English section label must be removed");
assert.equal(appSource.includes("InterestSection"), false, "Research Interests component must be removed");
assert.equal(stylesSource.includes(".interest-grid"), false, "Research Interests grid styles must be removed");
assert.equal(stylesSource.includes(".organic-card"), false, "Research Interests card styles must be removed");

console.log("Site content verification passed.");
```

- [ ] **Step 2: Add the package script to both package files**

```json
"scripts": {
  "dev": "vite --host 127.0.0.1",
  "build": "tsc -b && vite build",
  "postbuild": "node scripts/copy-404.mjs",
  "preview": "vite preview --host 127.0.0.1",
  "test:content": "node scripts/verify-site-content.mjs"
}
```

- [ ] **Step 3: Run the check and confirm the red state**

Run: `npm.cmd run test:content`

Expected: exit code 1 because the corrected title count is zero and the Research Interests source still exists.

### Task 2: Correct Content and Remove the Section

**Files:**
- Modify: `D:/code/cyy_website_project/project/src/content/siteContent.ts`
- Modify: `D:/code/cyy_website_project/project/src/main.tsx`
- Modify: `D:/code/cyy_website_project/project/src/styles.css`
- Modify: `D:/code/cyy_website_project/.deploy-repo/project/src/content/siteContent.ts`
- Modify: `D:/code/cyy_website_project/.deploy-repo/project/src/main.tsx`
- Modify: `D:/code/cyy_website_project/.deploy-repo/project/src/styles.css`
- Replace: generated `D:/code/cyy_website_project/.deploy-repo/index.html`, `404.html`, and `assets/index-*.js`

**Interfaces:**
- Consumes: the canonical title and section-removal assertions from Task 1.
- Produces: a type-safe source tree and static Vite bundle with no Research Interests UI.

- [ ] **Step 1: Update the content model and bilingual content**

Remove the Research Interests properties so these portions of `SiteContent` have this final shape:

```ts
sections: {
  about: string;
  education: string;
  projects: string;
  academic: string;
  funds: string;
  awards: string;
  activities: string;
  works: string;
  news: string;
  contact: string;
};
about: {
  short: string[];
  long: string[];
};
education: TimelineItem[];
```

Delete both `researchInterests: [...]` arrays and the `research` key from both `sections` objects. Replace all four old-title strings with this exact value:

```ts
"From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit"
```

- [ ] **Step 2: Remove the render call and component**

Delete this home-page line from `main.tsx`:

```tsx
<InterestSection title={site.sections.research} interests={site.researchInterests} />
```

Delete the complete function below:

```tsx
function InterestSection({
  title,
  interests,
}: {
  title: string;
  interests: { title: string; description: string }[];
}) {
  return (
    <section className="section-card">
      <SectionHeading icon={<Sparkles />} title={title} />
      <div className="interest-grid">
        {interests.map((interest) => (
          <article className="organic-card" key={interest.title}>
            <h3>{formatScientificText(interest.title)}</h3>
            <p>{formatScientificText(interest.description)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Remove only Research Interests CSS**

Delete `.interest-grid` and all `.organic-card`-only declarations, leaving the affected shared selectors exactly as follows:

```css
.project-card,
.skill-group {
  border: 1px solid rgba(222, 216, 207, 0.7);
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 12px 32px -26px rgba(93, 112, 82, 0.55);
  transition:
    transform 240ms ease,
    box-shadow 240ms ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 46px -28px rgba(93, 112, 82, 0.7);
}

.timeline-item h3,
.project-card h3,
.skill-group h3 {
  font-size: 1.22rem;
  line-height: 1.2;
}

.timeline-item p,
.project-card p {
  margin-top: 8px;
  color: #565648;
  font-weight: 400;
  white-space: pre-line;
}

@media (max-width: 920px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Mirror the source files to the deployment repository**

Copy and verify the files with:

```powershell
$files = @(
  'package.json',
  'scripts/verify-site-content.mjs',
  'src/content/siteContent.ts',
  'src/main.tsx',
  'src/styles.css'
)
foreach ($file in $files) {
  Copy-Item -LiteralPath "D:\code\cyy_website_project\project\$file" -Destination "D:\code\cyy_website_project\.deploy-repo\project\$file" -Force
}
foreach ($file in $files) {
  $sourceHash = (Get-FileHash -LiteralPath "D:\code\cyy_website_project\project\$file" -Algorithm SHA256).Hash
  $deployHash = (Get-FileHash -LiteralPath "D:\code\cyy_website_project\.deploy-repo\project\$file" -Algorithm SHA256).Hash
  if ($sourceHash -ne $deployHash) { throw "Source mismatch: $file" }
}
```

- [ ] **Step 5: Run the regression check and production build**

Run: `npm.cmd run test:content`

Expected: `Site content verification passed.` with exit code 0.

Run: `npm.cmd run build`

Expected: TypeScript and Vite complete with exit code 0 and `dist/404.html` is generated.

- [ ] **Step 6: Replace generated GitHub Pages files**

Copy the new output with:

```powershell
Copy-Item -LiteralPath 'D:\code\cyy_website_project\project\dist\index.html' -Destination 'D:\code\cyy_website_project\.deploy-repo\index.html' -Force
Copy-Item -LiteralPath 'D:\code\cyy_website_project\project\dist\404.html' -Destination 'D:\code\cyy_website_project\.deploy-repo\404.html' -Force
$asset = Get-ChildItem -LiteralPath 'D:\code\cyy_website_project\project\dist\assets' -Filter 'index-*.js' | Select-Object -Single
Copy-Item -LiteralPath $asset.FullName -Destination 'D:\code\cyy_website_project\.deploy-repo\assets' -Force
```

Delete the obsolete tracked `D:/code/cyy_website_project/.deploy-repo/assets/index-BjI8O03i.js` with `apply_patch` after the new asset is present.

- [ ] **Step 7: Verify source and bundle invariants**

Run these checks:

```powershell
rg -n 'Cooxling|Research Interests|研究兴趣|researchInterests|InterestSection|\.interest-grid|\.organic-card' project/src project/dist/assets
$source = Get-Content -Raw -Encoding utf8 'project/src/content/siteContent.ts'
$title = 'From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit'
if (($source.Split($title).Count - 1) -ne 4) { throw 'Canonical Paper 03 title count is not four' }
rg -F $title project/dist/assets
```

Expected: the stale-term `rg` prints no matches and returns 1; the title count check succeeds; the final `rg` prints the generated JavaScript match.

- [ ] **Step 8: Commit the implementation**

```powershell
git add -- project/package.json project/scripts/verify-site-content.mjs project/src/content/siteContent.ts project/src/main.tsx project/src/styles.css index.html 404.html assets
git diff --cached --check
git commit -m "Update paper title and remove research interests"
```

### Task 3: Rendered QA and GitHub Pages Publication

**Files:**
- Read: production preview and `https://yuyanchen1010.github.io/`
- Produce outside repository: desktop and mobile screenshot evidence.

**Interfaces:**
- Consumes: Task 2 production bundle and committed `main` branch.
- Produces: browser evidence and a pushed GitHub Pages revision.

- [ ] **Step 1: Start the production preview**

Run: `npm.cmd run preview -- --port 4173`

Expected: Vite serves `http://127.0.0.1:4173/` without compilation errors.

- [ ] **Step 2: Verify the local rendered flow**

Flow: home page loads -> Paper 03 is inspected -> language is toggled -> corrected title remains visible and no Research Interests heading exists.

Use the in-app Browser to check page identity, meaningful DOM, framework overlay absence, console warnings/errors, the language interaction, and desktop/mobile screenshots.

- [ ] **Step 3: Push the committed branch**

Push `.deploy-repo/main` to `ssh://git@ssh.github.com:443/yuyanchen1010/yuyanchen1010.github.io.git` using the workspace GitHub Pages SSH key, then fetch `main` into `refs/remotes/origin/main`.

```powershell
git -c "core.sshCommand=ssh -i D:/code/cyy_website_project/.local-ssh/github_pages_ed25519_push -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o UserKnownHostsFile=D:/code/cyy_website_project/.local-ssh/known_hosts_push -p 443" push ssh://git@ssh.github.com:443/yuyanchen1010/yuyanchen1010.github.io.git main:main
git -c "core.sshCommand=ssh -i D:/code/cyy_website_project/.local-ssh/github_pages_ed25519_push -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o UserKnownHostsFile=D:/code/cyy_website_project/.local-ssh/known_hosts_push -p 443" fetch ssh://git@ssh.github.com:443/yuyanchen1010/yuyanchen1010.github.io.git main:refs/remotes/origin/main
```

- [ ] **Step 4: Verify the published site**

Open `https://yuyanchen1010.github.io/?v=<commit>` in the in-app Browser and repeat the Paper 03, language-toggle, Research Interests absence, console, desktop, and mobile checks.

- [ ] **Step 5: Confirm repository state**

Run: `git status --short --branch` and `git rev-parse HEAD refs/remotes/origin/main`.

Expected: clean `main...origin/main` and identical commit hashes.
