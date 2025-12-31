# Portfolio Customization Guide

This portfolio is ready to deploy! Here are the items you should customize:

## 🔴 Required Customizations

### 1. Personal Information (index.html)
- **Line 35**: Replace "Your Name" with your actual name
- **Lines 470-480**: Update contact information:
  - Email address
  - LinkedIn URL
  - Location

### 2. Profile Photo (images/)
- Replace `images/profile-placeholder.jpg` with your actual profile photo
- Recommended size: 400x400px
- Format: JPG, PNG, or WebP

### 3. Resume Page (resume.html)
- **Lines 54-60**: Update contact information
- **Lines 75-80**: Update professional summary
- **Lines 181-195**: Add your actual work experience
- **Lines 201-208**: Add your education details
- **Lines 213-218**: Add your certifications

### 4. Contact Page (contact.html)
- **Lines 86-89**: Update contact links
- **Line 104**: Update location

## 🟡 Optional Customizations

### 5. Color Scheme (css/style.css)
- **Lines 7-13**: Modify primary, secondary, and accent colors
- Current theme: Blue (#2563eb), Green (#10b981), Orange (#f59e0b)

### 6. Project Content
- All project links point to your actual GitHub repositories
- Project descriptions match your actual implementations
- You may want to add screenshots or diagrams to project pages

### 7. SEO & Metadata
- Update meta descriptions in each HTML file if needed
- Modify page titles for better SEO

## ✅ Already Configured

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light mode toggle with localStorage
- ✅ Smooth scrolling animations
- ✅ Animated counters
- ✅ GitHub Pages deployment workflow
- ✅ SEO files (sitemap.xml, robots.txt)
- ✅ All project pages with detailed case studies
- ✅ Professional styling and animations

## 🚀 Deployment

1. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will deploy automatically on push to main

2. Your site will be live at: `https://justin-mbca.github.io/portfolio/`

## 📝 Testing Locally

```bash
# Start a local server
python -m http.server 8000

# Open in browser
http://localhost:8000
```

## 🔧 Troubleshooting

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear cache and reload

### Links not working
- Ensure all relative paths are correct
- Check that all project pages exist in /projects/ directory

### Images not loading
- Verify file names match HTML references
- Check file permissions

## 💡 Tips

1. **Keep it updated**: Regularly update projects and experience
2. **Add analytics**: Consider adding Google Analytics or similar
3. **Monitor performance**: Use Lighthouse to test performance
4. **Get feedback**: Share with peers and iterate based on feedback

---

Need help? Open an issue in the repository!
