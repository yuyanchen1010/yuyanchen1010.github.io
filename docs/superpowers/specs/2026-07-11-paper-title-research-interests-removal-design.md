# Paper Title and Research Interests Removal Design

## Goal

Update every occurrence of Paper 03 to use the title "From Green Space to Park-Based Cooling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit" and remove the Research Interests section from the bilingual website.

## Chosen Approach

Use a complete removal. Delete the Research Interests render call and component, remove its bilingual content fields and section labels, and delete CSS selectors used only by that section. This keeps the source aligned with the visible website and avoids dead content or styles.

The alternatives considered were hiding only the render call or hiding the section with CSS. Both would leave unused content and implementation behind, so they were rejected.

## Content Scope

- Update the Paper 03 title in the Chinese and English project cards.
- Update the same title in the Chinese and English news entries.
- Preserve the Paper 03 role, journal, description, links, and all other site content.

## Implementation Scope

- Update `project/src/content/siteContent.ts` in the source project and deployment repository.
- Remove the `InterestSection` usage and component from `project/src/main.tsx` in both copies.
- Remove Research Interests-only styles from `project/src/styles.css` in both copies while preserving selectors shared by other cards.
- Rebuild the Vite site and replace the generated deployment assets.
- Commit and push the resulting static site to the GitHub Pages `main` branch.

## Verification

- Search source and generated assets for the old `Cooxling` title and Research Interests labels.
- Run the production build.
- Verify the rendered home page in English and Chinese.
- Confirm the Paper 03 title is correct and the Research Interests section is absent.
- Check desktop and mobile layouts, browser console health, and the published GitHub Pages URL.
