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

Azure CLI (advanced)

You can also create the Static Web App with `az` if you prefer, but it requires a GitHub connection:

```powershell
az login
az staticwebapp create -n <app-name> -g <resource-group> --source https://github.com/<user>/<repo> --location "West US 2" --branch main --app-location "/"
```

Customize

- Swap images in the gallery by replacing the sample URLs in `index.html` or adding files under `/assets`.
- Edit color variables in `styles.css`.

Next steps I can help with

- Commit and push the files and create the GitHub repo.
- Customize branding, add real content or pages.
