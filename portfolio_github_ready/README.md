# Portfolio Website — GitHub-ready ZIP (Style A)
This package is ready to be pushed to a GitHub repository and deployed on Netlify using "Import from Git".

## What is included
- `index.html` (root)
- `portfolio.html`
- `coming-soon.html`
- `assets/` (styles, scripts, images)
- Netlify-enabled forms: `contact` and `subscribe` (see instructions below)
- `netlify.toml` (basic)

## Deploying to Netlify from GitHub
1. Create a new GitHub repository (e.g., `my-portfolio`).
2. Copy these files into the repository root (don't nest them in a parent folder).
3. On Netlify: Add new site → Import from Git → Connect GitHub → Select repo.
4. Build settings: leave build command blank and publish directory as `/`.
5. Deploy — Netlify will host `index.html` from the root.

## Netlify Forms
The included forms use `data-netlify="true"` and a hidden `form-name` field. Netlify captures submissions automatically on deploy. View form entries in Netlify Dashboard → Site → Forms.

## Notes
- Replace `assets/img/project1.jpg`, `project2.jpg`, `project3.jpg` with your own screenshots (keep filenames or update HTML accordingly).
- The package contains placeholder images. Replace them for better presentation.

Generated on 2025-10-27T09:58:58.571906 UTC by ChatGPT.
