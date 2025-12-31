# Portfolio Deployment Guide

## 🚀 Quick Start Deployment

Your portfolio is ready to deploy to GitHub Pages! Follow these simple steps:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/justin-mbca/portfolio`
2. Click on **Settings** (in the repository navigation)
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### Step 2: Merge to Main Branch

The GitHub Actions workflow is configured to deploy on push to `main` branch:

```bash
# Option A: Merge via GitHub Pull Request (Recommended)
# 1. Go to the repository on GitHub
# 2. Create a Pull Request from 'copilot/create-portfolio-website' to 'main'
# 3. Review changes and merge

# Option B: Merge via command line
git checkout main
git merge copilot/create-portfolio-website
git push origin main
```

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for the workflow to complete (usually 1-2 minutes)
4. Once complete, your site will be live!

### Step 4: Access Your Site

Your portfolio will be available at:
```
https://justin-mbca.github.io/portfolio/
```

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've customized:

- [ ] Personal name in `index.html` (Line 35)
- [ ] Contact information (email, LinkedIn, location)
- [ ] Profile photo in `images/` directory
- [ ] Resume details in `resume.html`
- [ ] Any other personal information

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## 🔧 Troubleshooting

### Deployment fails

**Problem**: GitHub Actions workflow fails

**Solutions**:
1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled in Settings
3. Verify repository permissions (Settings → Actions → General)
4. Make sure the workflow file is in `.github/workflows/pages.yml`

### Site shows 404

**Problem**: Accessing the URL shows "404 Not Found"

**Solutions**:
1. Wait 2-3 minutes after deployment completes
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify the URL is correct: `https://justin-mbca.github.io/portfolio/`
4. Check GitHub Pages settings to confirm the deployment URL

### Assets not loading (no CSS/images)

**Problem**: Site loads but looks broken (no styling)

**Solutions**:
1. Check browser console for 404 errors
2. Verify all asset paths are relative (not absolute)
3. Ensure file names match exactly (case-sensitive)
4. Clear browser cache

### Dark mode not working

**Problem**: Theme toggle doesn't work

**Solutions**:
1. Check if JavaScript is enabled in browser
2. Look for JavaScript errors in browser console
3. Verify `js/main.js` is loading correctly
4. Clear browser cache and localStorage

## 🔄 Updating Your Portfolio

After deployment, you can update your portfolio anytime:

```bash
# 1. Make changes to your files
# 2. Commit changes
git add .
git commit -m "Update project descriptions"

# 3. Push to main branch
git push origin main

# 4. GitHub Actions will automatically redeploy
```

The site will be updated within 1-2 minutes.

## 📊 Monitoring

### Check Deployment Status

Visit: `https://github.com/justin-mbca/portfolio/actions`

You'll see:
- ✅ Green checkmark: Deployment successful
- ❌ Red X: Deployment failed (click for details)
- 🟡 Yellow circle: Deployment in progress

### Analytics (Optional)

Consider adding analytics to track visitors:

1. **Google Analytics**: Add tracking code to all HTML files
2. **GitHub Insights**: Check repository Insights → Traffic
3. **Simple Analytics**: Privacy-friendly alternative

## 🎨 Customization After Deployment

You can customize without redeploying locally:

1. Make changes on GitHub web interface
2. Commit directly to `main` branch
3. Changes will auto-deploy

Or clone and work locally:

```bash
git clone https://github.com/justin-mbca/portfolio.git
cd portfolio

# Make changes
# Test locally: python -m http.server 8000

git add .
git commit -m "Update content"
git push origin main
```

## 🔒 Security Notes

- Never commit sensitive data (API keys, passwords, etc.)
- The site is public - don't include private information
- Use environment variables for any backend integrations
- Review what's included before pushing

## 📱 Testing on Mobile

After deployment, test on mobile devices:

1. Visit the live URL on your phone
2. Check responsiveness
3. Test all navigation links
4. Verify images load correctly
5. Test theme toggle

## ✨ Enhancements (Optional)

After deployment, consider:

1. **Custom Domain**: Settings → Pages → Custom domain
2. **SSL Certificate**: Automatically provided by GitHub Pages
3. **Analytics**: Add Google Analytics or similar
4. **SEO**: Submit sitemap to Google Search Console
5. **Social Cards**: Add Open Graph meta tags for social sharing

## 🆘 Getting Help

If you encounter issues:

1. Check GitHub Actions logs for error messages
2. Review this guide and the troubleshooting section
3. Check GitHub Pages documentation: https://docs.github.com/pages
4. Open an issue in the repository

## 🎉 Success!

Once deployed, share your portfolio:

- LinkedIn profile
- Resume/CV
- Email signature
- GitHub profile README
- Job applications

---

**Ready to deploy?** Follow Step 1 above to get started! 🚀
