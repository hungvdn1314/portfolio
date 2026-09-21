---
name: obsidian-bridge
description: >-
  Bidirectional integration between this portfolio workspace and the user's Obsidian Vault.
  Use whenever reading data from Obsidian, syncing new or modified portfolio entries into Obsidian,
  or managing knowledge notes for Vu Dinh Nghia Hung (IrrationaL).
---

# Obsidian Bridge Skill

This skill provides step-by-step instructions for bidirectional synchronization between the portfolio codebase (`index.html`, `js/i18n.js`, etc.) and the user's Obsidian Vault located at:
`C:\Users\Admin\Documents\Obsidian Vault`

---

## 1. Vault Map & Path Conventions

| Domain | Obsidian Vault Path | Portfolio Source |
| :--- | :--- | :--- |
| **Index / MOC** | `00 - Home.md` | `index.html` (Hero & Navigation) |
| **Profile** | `Profile/About & Bio.md` | `index.html` (#about) & `js/i18n.js` |
| **Contact** | `Profile/Contact & Socials.md` | `index.html` (#contact) |
| **Vietnamese** | `Profile/Ho So Tieng Viet.md` | `js/i18n.js` (`vi` block) |
| **Experience** | `Experience/<Company> - <Role>.md` | `index.html` (#experience) & `js/i18n.js` |
| **Commercial Projects** | `Projects/Commercial/<Project>.md` | `index.html` (#projects - Shipped) |
| **Web Projects** | `Projects/Web & Tools/<Project>.md` | `index.html` (#projects - Side) |
| **Skills** | `Skills/<Category>.md` | `index.html` (#skills) |
| **Attachments** | `Attachments/` | `assets/` |

---

## 2. Reading Data from Obsidian

When the user asks to recall or use details from Obsidian:
1. Locate note using `find_by_name` or `grep_search` in `C:\Users\Admin\Documents\Obsidian Vault\`.
2. Read the note with `view_file`.
3. If syncing an Obsidian note to the website, update:
   - `index.html`
   - `js/i18n.js` (for bilingual translations)

---

## 3. Writing Data to Obsidian

When any change is made to the website:
1. Update the appropriate note in `C:\Users\Admin\Documents\Obsidian Vault\`.
2. Follow standard YAML frontmatter (`title`, `tags`, `aliases`).
3. If a new project or role is added, append a wikilink in `00 - Home.md`.
4. Run `node obsidian-bridge.js status` to verify integrity.
