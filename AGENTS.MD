# Daily Mass Readings Specification

This repository uses the following specification when generating daily Mass readings content.

## 1. Authoritative date and liturgical source

- Resolve the target date in the `Europe/Malta` timezone unless the user explicitly provides another date.
- Use the WanYou ZhenYuan daily Mass page as the authoritative source for the day's liturgical celebration, reading order, and scripture ranges:
  - `https://www.wanyouzhenyuan.cn/index.php?m=daily&stype=mass&date=YYYY-MM-DD`
- Do not assume a fixed weekday structure. Follow the actual order shown for that day's liturgy.
- If the same date offers a feast, memorial, weekday, or alternative celebration, use the celebration that is actually to be observed that day. Do not combine readings from different celebrations.

## 2. Alternative readings

- If one liturgy provides multiple legitimate alternative readings and WanYou ZhenYuan does not state a priority, use the **first option by default**.
- Use another option only when the user explicitly requests it.

## 3. Scripture versions

### Chinese

- Base the Chinese text on the corresponding passages of the **Studium Biblicum Chinese Catholic Bible (思高圣经)**.
- Use short quotations plus faithful, accurate rendering rather than reproducing long copyrighted passages verbatim.
- Preserve Catholic names and terminology used in the Chinese Catholic tradition.

### English

- Use **NRSVCE — New Revised Standard Version, Catholic Edition** as the English Bible version.
- Where copyright restrictions prevent long verbatim reproduction, provide a faithful passage-aligned rendering based on the NRSVCE while keeping the meaning and verse scope accurate.

## 4. Verse-number differences

- When the Catholic/Chinese verse numbering used by WanYou ZhenYuan differs from the English Bible numbering, the **actual passage content selected by WanYou ZhenYuan takes priority**.
- The English text must correspond to that same content range.
- The English citation must use the actual verse numbering of the English version rather than mechanically copying the Chinese verse numbers.
- Example format when numbering differs:
  - `**米该亚先知书 5:1-4 | Micah 5:2-5a**`

## 5. Required article opening

The first two body lines must use exactly this bilingual pattern, with no additional heading inserted before them:

`常年期第二十二周（星期六） | Saturday of the Twenty-second Week in Ordinary Time`

`2026年9月5日 · 星期六 | September 5, 2026 · Saturday`

Replace the liturgical name, weekday, and date as appropriate for the target day.

For a feast or memorial, use the actual liturgical name instead of an Ordinary Time weekday label, for example:

`圣母诞辰 | Nativity of the Blessed Virgin Mary`

## 6. Section structure

- Major liturgical sections use H2 headings (`##`).
- Use only the sections that actually occur in the day's liturgy, in the exact liturgical order.
- Typical section headings include:
  - `## 读经一 | First Reading`
  - `## 答唱咏 | Responsorial Psalm`
  - `## 读经二 | Second Reading`
  - `## 福音前欢呼 | Alleluia`
  - `## 福音 | Gospel`
- Do **not** add `### 中文`.
- Do **not** add `### English`.
- Do not add decorative emoji, extra commentary, homily material, explanations, or other sections unless explicitly required by this specification.

## 7. Citation line and bilingual ordering

For scripture sections, place a bold bilingual citation immediately below the section heading:

`**格林多人前书 9:16-19,22b-27 | 1 Corinthians 9:16-19,22b-27**`

Then present:

1. Chinese text first.
2. English text immediately after the Chinese text.

Do not insert language-label subheadings between them.

For the Responsorial Psalm:

- Keep the response in the appropriate places.
- Use the bilingual response format on its first appearance when appropriate:
  - `**答：…… | R. ……**`
- Chinese psalm text and responses come first; English psalm text and responses follow.

For the Alleluia/Gospel Acclamation:

- Include a scripture citation when the source gives one.
- Chinese comes first, followed directly by English.

## 8. Golden verse at the end

- After the complete day's readings, randomly select one **short** sentence from that day's readings as the closing golden verse.
- It must be the final line of the article.
- Use exactly this format:

`【中文金句】 | 【对应英语】`

Example:

`知识会使人傲慢自大，爱德才能造就人。 | Knowledge puffs up, but love builds up.`

- Do not add a heading such as `金句`, `Quote`, or `Verse of the Day` before it.

## 9. Daily-reading output scope

- The daily reading article contains the Mass readings only.
- Do not include a homily, reflection, news item, image description, prayer, or source list in the reading body unless the user explicitly requests a separate artifact.

## 10. MDX format in this repository

When creating a reading under:

`src/content/blog/readings/YYYY/MM/DD/index.mdx`

use existing reading entries as the structural reference, especially:

`src/content/blog/readings/2026/09/08/index.mdx`

The expected frontmatter pattern is:

```yaml
---
title: "<Chinese liturgical title> | <English date/title>"
excerpt: "<short Chinese golden phrase> | <short English counterpart>"
date: YYYY-MM-DD
category: "daily-readings"
tags: ["..."]
author: "paul"
thumbnail: ./cover.png
featured: false
---
```

- Keep frontmatter consistent with the repository's existing schema.
- Use `thumbnail: ./cover.png` when the task includes a generated cover image named `cover.png`.
- The body starts immediately after frontmatter with the two required bilingual opening lines described above.
- Use H2 headings for the liturgical sections.

## 11. Ambiguity and conflicts

This is a strict specification.

- Do not independently add, remove, rename, reorder, or restyle required sections.
- If a requested task conflicts with this specification, identify the conflict before generating the reading.
- If WanYou ZhenYuan presents an ambiguity not covered by this file, do not guess. State the ambiguity and ask for the specification to be extended.
- Once the user resolves an ambiguity, incorporate the new rule into this specification when requested.

## 12. GitHub conventions for this repository

These GitHub rules apply **only to the `wangdongcheng/ccim` repository** and must not be generalized to any other repository.

- Commit messages, PR titles, and PR bodies must be written in **English only**.
- Treat the exact user instructions **`commit to main`** and **`push to main`** as explicit authorization to write directly to the `main` branch.
- When either of those instructions is present for a `ccim` task, commit directly to `main` and do **not** create, update, synchronize, or otherwise use the `preview` branch for that task.
- Do not reinterpret similar wording as authorization. If direct-to-main behavior is required, the instruction must explicitly contain `commit to main` or `push to main`.
- In normal `ccim` work, there is generally no need to operate on the `preview` branch unless the user explicitly asks for `preview`, a pull request, or another non-main workflow.
- These branch-handling rules are repository-specific and apply only to `wangdongcheng/ccim`.

# ccim Astro Development Guidelines

These rules apply specifically to the `wangdongcheng/ccim` Astro site.

1. Prefer static Astro output and server-rendered HTML; keep client-side JavaScript to the minimum needed for real interaction.
2. Use `.astro` components for content-focused UI and hydrate components only when necessary.
3. Avoid `client:load` unless immediate hydration is essential; prefer no hydration, `client:idle`, or `client:visible`.
4. Do not add a dependency when the same result can be achieved cleanly with Astro, HTML, CSS, or a small local utility.
5. Keep components small, reusable, and easy to remove or replace; avoid one-off components tightly coupled to a single page when a generic component is practical.
6. Use TypeScript for non-trivial props, config objects, content schemas, and shared utilities.
7. Keep site-wide values such as site name, production URL, navigation, metadata defaults, and social links centralized in configuration rather than hardcoded across components.
8. Use Astro content collections/MDX consistently for readings, homilies, reflections, and other structured site content.
9. Preserve the existing content schema and frontmatter conventions unless a schema change is explicitly required.
10. Never change the daily-reading structure defined earlier in this file as a side effect of theme or component work.
11. Use semantic HTML and logical heading order; each rendered page should have one meaningful `h1`.
12. Use real `<a>` elements for navigation and real `<button>` elements for actions; all interactive controls must work with keyboard navigation.
13. Keep visible focus states and adequate color contrast; do not communicate meaning by color alone.
14. Give meaningful images useful `alt` text and decorative images empty alt text; provide width and height where practical to avoid layout shift.
15. Respect `prefers-reduced-motion`; avoid unnecessary autoplaying or attention-grabbing motion.
16. Every indexable page should have a useful title, meta description, canonical URL, and Open Graph metadata.
17. Keep Open Graph/social image URLs absolute in rendered metadata and ensure generated reading cover images resolve correctly after build.
18. Preserve crawlable HTML content and real internal links; do not hide important content behind client-only rendering or JavaScript navigation.
19. Keep sitemap, robots handling, canonical paths, and trailing-slash behavior consistent to avoid duplicate URLs.
20. Add structured data only when it accurately represents visible page content; do not fabricate schema fields.
21. Optimize local images and use predictable aspect ratios; prefer modern formats when appropriate, while preserving formats explicitly required by content such as `cover.png`.
22. Lazy-load below-the-fold media, but do not delay critical above-the-fold images without a clear reason.
23. Keep CSS organized and reuse CSS custom properties/design tokens for repeated colors, spacing, typography, radii, and other theme values instead of scattering magic values.
24. Keep third-party scripts, analytics, ads, and embeds isolated and optional where possible; do not let them block primary page rendering.
25. Changes must remain compatible with the existing Cloudflare deployment/build workflow and must not introduce environment-specific assumptions without documenting them.
26. Before considering a code change complete, verify that the project builds cleanly, key pages render without console errors, internal links still work, metadata is valid, and the layout remains usable on mobile and desktop.
