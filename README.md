# Ahmed Gubran Cybersecurity Portfolio

A fully static, interactive cybersecurity portfolio with:

- classic dark cyber interface
- subtle code-rain background
- custom cursor and white mouse trail
- Linux-style navigation terminal
- context-aware FAQ CyberBot
- certificate and achievement gallery with image preview modal
- projects, SOC experience, reports/write-up sections
- responsive layout for desktop and mobile

## Open locally

Double-click `index.html` or open it in your browser.

## Edit personal data

Edit:

```text
data/portfolio-data.js
```

## Replace images

Put your files here and update the paths in `data/portfolio-data.js`:

```text
assets/certificates/
assets/awards/
assets/achievements/
assets/projects/
assets/profile/
assets/cv/
```

## Terminal commands

Try these inside the website terminal:

```text
help
ls
pwd
whoami
neofetch
cat profile.txt
cat certs.txt
cat skills.txt
cat projects.txt
open certifications
open projects
open awards
open contact
clear
sudo hire-ahmed
```

## Privacy note

Before publishing publicly, consider redacting certificate IDs, passport numbers, QR codes, or candidate IDs if you do not want them visible online.

## Pro Update v2
Added in this build:
- GitHub and X/Twitter handle: `amd11o`
- Deeper CyberBot knowledge about eJPT, Security+, SOC, projects, awards, and write-ups
- Kali-style cybersecurity notebook with PDF reports, Markdown notes, and curated references
- Settings panel with language, color palette, readability, font style, and dark/light mode
- Extra certificate cards for HCIA-Security Certification and Microsoft Azure AI Fundamentals
- Medal-style icons on credential cards
- More terminal commands: `open writeups`, `open github`, `open twitter`, `settings`, `ejpt --info`, `certs --verify`, `socials`, `ls writeups`

Edit the portfolio data in `data/portfolio-data.js`.
To add more write-ups, place PDFs or Markdown files inside `assets/writeups/` and link them in `writeupLibrary.files`.

## V3 Update
- CyberBot is now broader: it answers portfolio questions and common cybersecurity concepts such as IDOR, Broken Access Control, SQL Injection, XSS, CSRF, SSRF, Nmap, Burp Suite, SIEM/SOC triage, phishing, malware, incident response, CVSS, and pentest reporting.
- Arabic mode now updates major page labels, section titles, descriptions, chatbot placeholder, and terminal placeholder.
- Added Ahmed's cyber workspace image as the main profile avatar.
- Added the SMAP vulnerability report as the main security research report.
- Added terminal commands: `cgpa`, `cat report.txt`, `open smap-report`, and `ask cyberbot`.

## Important Security Note
Before publishing publicly, review certificate IDs, QR codes, candidate IDs, and any private academic identifiers. Keep sensitive evidence redacted.

## V4 Update
- Added a visible CyberBot knowledge search bar.
- Expanded CyberBot into a broader cybersecurity assistant with Ahmed-specific answers.
- Restored SMAP report links to the SMAP report only.
- Added completed write-up files for eJPT, Security+, Kali troubleshooting, SOC triage, tools, web methodology, personal growth, and Windows process baseline.
- Added Kali File Manager entries for the new notes.

## Private owner notes

The folder `private_notes_for_ahmed_DO_NOT_UPLOAD/` is for Ahmed only. Do not upload it to public hosting if you want those notes to remain private.


## V6 Update
- Cleaned public-facing report labels and article wording.
- Upgraded CyberBot into a wider cyber command assistant with command explanations, tool notes, security concepts, and Ahmed-specific answers.
- Added Bot and Settings icons to the left rail navigation.
- Improved interactive rail icons, animations, and reader labels for a cleaner public portfolio experience.

## V7 Quality Update

This version focuses on interface reliability and professional presentation:

- CyberBot close button fixed and made always visible.
- Settings panel now toggles open/close from the same button and closes with outside click or Escape.
- Reader no longer exposes raw markdown actions such as open-full-file or copy-link.
- Write-ups open through an interactive notebook reader with section navigation, progress bar, copyable code blocks, focus mode, and print/save support.
- Project action buttons now open portfolio resources instead of reloading the page.
- Local visitor counter added for presentation/demo purposes.
- Extra CyberBot knowledge added for common cybersecurity tools and commands.
- Zero Trust, phishing project, secure web application, and personal tools notes added.

For a real global visitor counter across all visitors, connect a backend/API counter or a privacy-friendly analytics service. The included counter is local browser-based for static hosting.

## V8 updates
- Updated LinkedIn to `linkedin.com/in/amd11o`.
- Added Medium: `medium.com/@amd11o`.
- Added TryHackMe: `tryhackme.com/p/amd11o`.
- Added TryHackMe Top 5 highlight in profile stats, identity pills, CyberBot, terminal, and notebook.
- Expanded professional pentesting and SOC tools coverage in CyberBot and notes.
- Added `/tryhackme`, `/pentest-tools`, and `/soc-tools` CyberBot commands.
- Updated Tools Cheatsheet and Personal Tools Index with more professional pentest, SOC, DFIR, and reporting tools.


## V9 cursor fix
The V9 build restores and upgrades the interactive white cursor trail. It now stays visible above certificate previews, modals, settings, chatbot, and file windows, with a magic-wand ethical-hacker sparkle effect.

## V10 Social Interaction Polish
- Added interactive social signature under the hero buttons.
- Added orbit-style amd11o social card.
- Added floating social dock for LinkedIn, GitHub, X, Medium, and TryHackMe.
- Added icon-based contact rows and footer social icon bar.
- Preserved V9 cursor magic trail and cyber animations.

## V11 Performance Note
The mouse trail was optimized to be lighter: white-only trail, fewer particles, no floating runes, shorter trail lifetime, and lower blur. This keeps the ethical-hacker feel while reducing CPU/GPU usage on laptops.


## Official Final Version Notes

This official final build uses a left-side CyberBot drawer and a right-side command terminal drawer. The interface keeps social links in the contact section, footer, and bottom dock only to avoid duplication. The default mouse trail is lightweight for better laptop performance.

Quick controls:
- Open CyberBot from the left rail, top bar, contact card, or floating bot button.
- Open Terminal from the hero button, top bar, left rail, or floating terminal button.
- Use Settings to switch palettes, readability, language, font style, and light/dark mode.

Recommended editable publishing workflow: keep the project in GitHub, then deploy it with GitHub Pages, Netlify, Cloudflare Pages, or Vercel. Update files locally, push to GitHub, and the public site can be updated whenever needed.

## Official Publish Patch
This release includes a final UI polish pass:
- cleaned and aligned left navigation rail numbers/icons
- icon-supported animated top navigation
- publish-ready ZIP excludes private owner notes
- JavaScript syntax check passed
- local asset and anchor references checked

Before publishing publicly, review certificates and reports for QR codes, candidate IDs, certificate IDs, or private academic identifiers.
