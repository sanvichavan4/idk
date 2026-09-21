# Sanvi Chavan — Engineering Portfolio

A single-page portfolio site built for a student engineer's project work,
research experience, and technical skills. Styled like a lab notebook —
dot-grid "graph paper" backgrounds, a blueprint-blue accent, and a recurring
"title block" borrowed from the signature strip at the bottom of an
engineering notebook page.

No frameworks, no build step, no backend. Just HTML, CSS, and a small amount
of vanilla JavaScript.

## 1. What's in this project

```text
sanvi-engineering-portfolio/
│
├── index.html          # all page content lives here
├── style.css            # all styling, organized into labeled sections
├── script.js             # mobile nav toggle + footer year (that's it)
├── README.md              # this file
│
└── images/
    ├── about-portrait.svg          # placeholder for a headshot/workbench photo
    ├── roomba.svg                  # placeholder — Autonomous Roomba Simulation
    ├── down-counter.svg            # placeholder — 60–0 Digital Down-Counter
    ├── multiplexed-counter.svg     # placeholder — 00–19 Multiplexed Counter
    ├── garage-door.svg             # placeholder — Garage Door Simulator
    ├── message-board.svg           # placeholder — Seven-Segment Message Board
    ├── furnace.svg                 # placeholder — Furnace Simulator Circuit
    └── breadboard-companion.svg    # placeholder — Soldered Breadboard Companion
```

The `.svg` files are generated placeholders (a label on graph-paper texture)
so the site looks complete and doesn't break before you add real photos.
They're not stock photography — just stand-ins.

## 2. Running it locally

No server, no install, no build step required.

1. Download or clone this folder.
2. Double-click `index.html`, or drag it into a browser window.

That's it — the whole site works from the local file system.

If you'd rather run a local server (optional, mainly useful for testing),
from inside the project folder:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser.

## 3. Putting it on GitHub

1. Create a new repository on GitHub (for example, `sanvi-engineering-portfolio`).
2. Upload all the files in this folder — keeping `index.html`, `style.css`,
   `script.js`, and the `images/` folder at the **root** of the repository
   (not inside a subfolder).
3. Commit and push.

If you're using the command line:

```bash
cd sanvi-engineering-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## 4. Turning on GitHub Pages

1. On GitHub, open your repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. GitHub will give you a live URL, usually:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   (It can take a minute or two to go live the first time.)

## 5. Replacing the project photo placeholders

Each project card points to an SVG placeholder in `images/`, for example:

```html
<img src="images/roomba.svg" alt="...">
```

To swap in a real photo:

1. Add your photo to the `images/` folder — name it anything you like,
   for example `roomba.jpg`.
2. In `index.html`, find the matching `<img src="images/roomba.svg" ...>`
   tag and change the `src` to your new filename:
   `<img src="images/roomba.jpg" ...>`
3. Also update the `alt` text so it describes the real photo instead of
   saying "placeholder."

Recommended photo size: roughly 1200×900px (4:3), landscape orientation,
under ~500KB so the page loads quickly. The `about-portrait.svg` works the
same way for a headshot or workbench photo near the top of the About section.

## 6. Where to change the text

Everything you'll want to edit lives in `index.html`, in plain, labeled
sections (each has an HTML comment banner, like `<!-- PROJECT 01 -->`):

- **Hero intro** — search for `hero-lede` for the opening paragraph.
- **About** — the `id="about"` section.
- **Projects** — the `id="projects"` section. Each project is one
  `<article class="project-card">` block. The `project-detail` area inside
  each one has placeholder fields (Motivation, Problem, Design, Build,
  Testing, Iterations, Results, What I learned) — replace the italic
  "Add notes here." text with your own write-up as each project log is ready.
- **Engineering process** — the `id="process"` section.
- **Skills** — the `id="skills"` section, grouped into three columns.
- **Research** — the `id="research"` section.
- **Education / activities** — the `id="education"` section.
- **Contact** — the `id="contact"` section. Update or add links inside
  `<div class="contact-links">` (there's a commented-out example for adding
  GitHub or LinkedIn once you have profiles to link to).

## 7. Where to change colors and fonts

All design tokens live at the top of `style.css`, inside `:root`:

```css
:root {
  --paper:        #EEF1EF;   /* page background */
  --ink:          #16202B;   /* primary text */
  --blueprint:    #2F5D8A;   /* primary accent — links, numbers, icons */
  --signal:       #D9622B;   /* highlighter accent, used sparingly */
  --font-display: 'Space Grotesk', ...;
  --font-mono:    'IBM Plex Mono', ...;
}
```

Change a value there and it updates everywhere that token is used. To swap
fonts, change the Google Fonts `<link>` in the `<head>` of `index.html` to
load the new font, then update `--font-display` / `--font-mono` to match.

## 8. Adding a new project later

To add an 8th project card, copy one entire `<article class="project-card">
... </article>` block in the Projects section of `index.html`, then:

1. Update the `FIG. 0X` label and the `<span class="num">` number.
2. Update the category tag, title, description, and skill tags.
3. Point the `<img>` at a new file in `images/`.
4. Fill in the eight `project-detail` fields (or leave them as placeholders
   until you're ready).

No changes to `style.css` are needed — new cards pick up the existing styles
automatically.

## 9. A note on privacy

The Contact section links to an email address only. A phone number was
intentionally left off the public site — add one only if you're comfortable
with it being publicly visible once the site is live.
