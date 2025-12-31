#!/bin/bash

echo "==================================="
echo "Portfolio Validation Report"
echo "==================================="
echo ""

# Check HTML files
echo "✓ HTML Files:"
find . -name "*.html" -type f | wc -l | xargs echo "  Found HTML files:"

# Check CSS
echo "✓ CSS Files:"
find . -name "*.css" -type f | wc -l | xargs echo "  Found CSS files:"

# Check JS
echo "✓ JavaScript Files:"
find . -name "*.js" -type f | wc -l | xargs echo "  Found JS files:"

# Check essential pages
echo ""
echo "✓ Essential Pages:"
[ -f "index.html" ] && echo "  ✓ index.html" || echo "  ✗ index.html MISSING"
[ -f "resume.html" ] && echo "  ✓ resume.html" || echo "  ✗ resume.html MISSING"
[ -f "contact.html" ] && echo "  ✓ contact.html" || echo "  ✗ contact.html MISSING"

# Check project pages
echo ""
echo "✓ Project Pages:"
[ -f "projects/bioinformatics-pipeline.html" ] && echo "  ✓ bioinformatics-pipeline.html" || echo "  ✗ MISSING"
[ -f "projects/streaming-platform.html" ] && echo "  ✓ streaming-platform.html" || echo "  ✗ MISSING"
[ -f "projects/drug-discovery-ai.html" ] && echo "  ✓ drug-discovery-ai.html" || echo "  ✗ MISSING"
[ -f "projects/cardioinsight-ai.html" ] && echo "  ✓ cardioinsight-ai.html" || echo "  ✗ MISSING"

# Check assets
echo ""
echo "✓ Assets:"
[ -f "css/style.css" ] && echo "  ✓ style.css" || echo "  ✗ style.css MISSING"
[ -f "js/main.js" ] && echo "  ✓ main.js" || echo "  ✗ main.js MISSING"
[ -f "images/hero-bg.svg" ] && echo "  ✓ hero-bg.svg" || echo "  ✗ hero-bg.svg MISSING"

# Check deployment
echo ""
echo "✓ Deployment:"
[ -f ".github/workflows/pages.yml" ] && echo "  ✓ GitHub Actions workflow" || echo "  ✗ workflow MISSING"
[ -f "sitemap.xml" ] && echo "  ✓ sitemap.xml" || echo "  ✗ sitemap.xml MISSING"
[ -f "robots.txt" ] && echo "  ✓ robots.txt" || echo "  ✗ robots.txt MISSING"

# Check key features in index.html
echo ""
echo "✓ Key Features in index.html:"
grep -q "data-theme" index.html && echo "  ✓ Theme toggle support" || echo "  ✗ Theme toggle MISSING"
grep -q "stats" index.html && echo "  ✓ Stats section" || echo "  ✗ Stats section MISSING"
grep -q "projects-grid" index.html && echo "  ✓ Projects grid" || echo "  ✗ Projects grid MISSING"
grep -q "skills-categories" index.html && echo "  ✓ Skills section" || echo "  ✗ Skills section MISSING"

# Check JavaScript features
echo ""
echo "✓ JavaScript Features:"
grep -q "theme-toggle" js/main.js && echo "  ✓ Theme toggle" || echo "  ✗ Theme toggle MISSING"
grep -q "animateCounters" js/main.js && echo "  ✓ Animated counters" || echo "  ✗ Counters MISSING"
grep -q "IntersectionObserver" js/main.js && echo "  ✓ Scroll animations" || echo "  ✗ Animations MISSING"

# Line count statistics
echo ""
echo "==================================="
echo "Code Statistics:"
echo "==================================="
echo "Total lines of CSS:" $(wc -l < css/style.css)
echo "Total lines of JS:" $(wc -l < js/main.js)
echo "Total lines of HTML:" $(find . -name "*.html" -type f -exec wc -l {} + | tail -1 | awk '{print $1}')

echo ""
echo "==================================="
echo "✅ Validation Complete!"
echo "==================================="
