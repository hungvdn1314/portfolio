# Antigravity <-> Obsidian Bidirectional Bridge Protocol

## Obsidian Vault Location
The active Obsidian vault for this portfolio is located at:
`C:\Users\Admin\Documents\Obsidian Vault`

---

## Directives

### 1. Write Sync (Portfolio Codebase -> Obsidian)
Whenever you modify, add, or refactor any portfolio data in this repository (e.g. `index.html`, `js/i18n.js`, or new assets):
- **Projects**:
  - Commercial game projects -> update or create `C:\Users\Admin\Documents\Obsidian Vault\Projects\Commercial\<Project Name>.md`.
  - Web & Internal projects -> update or create `C:\Users\Admin\Documents\Obsidian Vault\Projects\Web & Tools\<Project Name>.md`.
  - Always keep the Map of Content in `C:\Users\Admin\Documents\Obsidian Vault\00 - Home.md` updated with links to new projects.
- **Career & Experience**:
  - Update `C:\Users\Admin\Documents\Obsidian Vault\Experience\<Role / Company>.md`.
- **Skills**:
  - Update relevant category in `C:\Users\Admin\Documents\Obsidian Vault\Skills\<Category>.md`.
- **Profile / Bio / Contact**:
  - Update `C:\Users\Admin\Documents\Obsidian Vault\Profile\About & Bio.md`, `Contact & Socials.md`, or `Ho So Tieng Viet.md`.

### 2. Read Sync (Obsidian -> Agent Context / Portfolio)
Whenever the user asks questions regarding:
- Detailed past project history, GDD details, or technical metrics
- Draft notes, unpublished project ideas, or career bullet points
- Syncing changes made inside Obsidian back into the web portfolio

You MUST query and read the corresponding markdown files from `C:\Users\Admin\Documents\Obsidian Vault\` using `view_file`, `grep_search`, or `find_by_name`.

### 3. Note Formatting Standard
- Maintain standard YAML frontmatter (`title`, `tags`, `role`, `company`, etc.).
- Use Obsidian wikilinks format: `[[Target Note]]` or `[[Target Note|Custom Text]]`.
- Keep UTF-8 encoding without BOM.
