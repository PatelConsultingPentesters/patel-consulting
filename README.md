# Patel Consulting — landing page

Static site: HTML5, CSS3, ~25 lines of vanilla JS. No build step.

## Structure
```
index.html
css/style.css
js/main.js
favicon.svg
images/og-image.png, CREDITS.md
```

## Before publishing
1. Replace every `hello@YOURDOMAIN` in `index.html` with a real address.
2. Set absolute URLs for `og:image` (and add `og:url`) once the domain exists.
3. Optional: self-host Inter and JetBrains Mono (currently loaded from Google Fonts) for speed/privacy.
4. Add real photography only after licence checks (see `images/CREDITS.md`).

## Content policy
No clients, testimonials, certifications, statistics, years of experience or case studies are claimed. Keep it that way until they are true.

Preview: `python3 -m http.server` in this folder.
