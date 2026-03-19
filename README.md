# SSBCOVERS GitHub Pages Version

This package is a static, GitHub Pages friendly version of the website.

## What was changed
- Removed cart, basket and checkout functionality
- Removed PayFast integration and payment return/cancel pages
- Replaced product purchase flow with a quote request flow
- Kept the site as plain HTML/CSS/JS so it can deploy on GitHub Pages

## Deploy on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder to the root of the repository.
3. Commit and push.
4. In GitHub, open **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the **main** branch and **/(root)** folder.
7. Save.
8. Wait a minute or two and open the published site URL from GitHub Pages.

## Main files
- `index.html` - homepage
- `quote.html` - quote request page
- `logo-Photoroom.png`, `logo.ico`, `hero-video.mp4` - local assets
