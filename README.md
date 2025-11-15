# Aurora — Fancy Static Site (Azure-ready)

This is a small, modern static site template ready to deploy to Azure Static Web Apps.

Files added:

- `index.html` — main page
- `styles.css` — styles and layout
- `script.js` — small interactions (theme toggle, reveal, contact mock)
- `staticwebapp.config.json` — routing + headers
- `.github/workflows/azure-static-web-apps.yml` — GitHub Actions workflow

Quick local preview

Open `index.html` with any static server. Example using PowerShell + Python:

```powershell
# from repo root
python -m http.server 5000; Start-Process 'http://localhost:5000'
```

Deploy to Azure Static Web Apps (two options)

1. Create an Azure Static Web App from the Azure Portal and connect your GitHub repo

- Create the resource -> choose the repository and branch -> Azure will add a workflow that deploys on push.

2. Use the included GitHub Actions workflow

- Push this repo to GitHub.
- Create an Azure Static Web App in the portal and note the `GitHub Actions` builder information.
- In your repo, go to Settings → Secrets → Actions and add `AZURE_STATIC_WEB_APPS_API_TOKEN` (portal provides this if you choose `Generate` during resource creation).
- On push to `main`, the `.github/workflows/azure-static-web-apps.yml` will run and deploy.

# My Retro Site — 1995 theme (Azure-ready)

This repository contains a small static site intentionally styled to look like a mid-1990s web / Windows 95 experience.

Files of note:

- `index.html` — main retro page (marquee, under-construction GIF, beveled window)
- `styles.css` — 1990s-style CSS (tiled background, monospace font, 3D buttons)
- `script.js` — small retro interactions (typewriter header, taskbar clock, simple contact alert)
- `staticwebapp.config.json` — routing for Azure Static Web Apps
- `.github/workflows/azure-static-web-apps.yml` — GitHub Actions workflow for deployment

Preview locally

Open `index.html` with any static server. Example using PowerShell + Python:

```powershell
# from repo root
python -m http.server 5000; Start-Process 'http://localhost:5000'
```

Deploy to Azure Static Web Apps

1) Create an Azure Static Web App in the Azure Portal and connect your GitHub repository. The portal can generate and add the workflow for you.

2) Push this repo to GitHub and add the secret `AZURE_STATIC_WEB_APPS_API_TOKEN` (from the Azure portal) to your repository's Settings → Secrets → Actions. The included workflow runs on pushes to `main`.

Customize

- Replace the under-construction GIF or other images in `index.html`.
- Tweak colors and layout in `styles.css`.

Next steps I can help with

- Commit and push the files to a new GitHub repo and create the Static Web App in Azure for you.
- Add more retro pages or convert the contact form to a real backend function.
