# MA Voter Registration Page - Mobile-Friendly Mockup

## Overview

This is an unofficial mobile-friendly redesign mockup of the Massachusetts voter registration search page. It demonstrates how the official page could be improved for mobile users.

**Important:** This is for demonstration purposes only and is not connected to actual voter registration data.

## Running Locally

Use a live-reloading development server:

```bash
npx live-server
```

This will open the site in your browser and automatically reload when you make changes to any files.

## File Structure

- `index.html` - Main search form page with demo navigation
- `results-active.html` - Active registration status result page
- `results-inactive.html` - Inactive registration status result page
- `results-not-found.html` - Not registered result page
- `styles.css` - All responsive styling (mobile-first design)
- `script.js` - Form handling and interactive behavior
- `README.md` - Project documentation
- `CNAME` - GitHub Pages custom domain configuration

## Key Design Decisions

### Mobile-First Approach
- Responsive breakpoints at 640px and 1024px
- Stacked vertical layouts on mobile
- Large touch targets (minimum 44px)
- Collapsible navigation and secondary info

### User Experience Improvements
- **Native date picker** instead of three dropdowns for better mobile UX
- **Color-coded status banners**: Green (active), Yellow (inactive), Red (not registered)
- **Polling location prominently displayed** at top of results with Google Maps directions link
- **Collapsible details** using HTML5 `<details>` element for secondary information
- **Demo navigation** - Since this isn't connected to real data, demo links navigate to different result states

### No External Dependencies
- Pure HTML5, CSS3, vanilla JavaScript
- No frameworks or build tools required
- Works offline after initial load

## Modifying the Mockup

### Adding New Result Pages
1. Copy one of the existing `results-*.html` files
2. Update the status banner color class (`.status-banner-success`, `.status-banner-warning`, or `.status-banner-error`)
3. Update voter details and polling information
4. Add link to new page in `index.html` demo links section

### Changing Colors
Color scheme uses CSS custom properties in `styles.css`:
- `--primary-color` - Main brand color
- `--text-color` - Primary text
- `--background` - Page background
- `--border-color` - Borders and dividers

Status banner colors are defined in their respective classes (`.status-banner-success`, etc.)

### Updating Content
All content is static HTML. To update:
- Form fields: Edit `index.html`
- Voter details: Edit info-grid sections in result pages
- Elected officials: Edit officials-group sections
- Contact information: Edit contact-card sections

## GitHub Pages Deployment

This repo is configured for GitHub Pages with custom domain `ianhuntisaak.com`:

1. Push changes to `main` branch
2. GitHub Actions will automatically deploy to GitHub Pages
3. Custom domain is configured via `CNAME` file

To change the custom domain, edit the `CNAME` file.

## Testing

### Browser Testing
Test on:
- Mobile Safari (iOS)
- Chrome Mobile (Android)
- Desktop browsers at various viewport sizes

### Accessibility Testing
- Use browser DevTools Lighthouse audit
- Test keyboard navigation (Tab, Enter, Escape)
- Test with screen reader (VoiceOver on iOS/macOS)

## Known Limitations

- **No real data**: This is a static mockup not connected to actual voter registration database
- **No form validation**: Validation is disabled to allow easy demo navigation
- **Date picker limitations**: HTML5 date input doesn't support default year without pre-filling the field
- **No backend**: Would need official API access or backend proxy to connect to real data

## Future Enhancements

If connecting to real data:
- Implement proper form validation
- Add loading states during API calls
- Add error handling for failed requests
- Implement proper routing instead of separate HTML files
- Add print-friendly version of results
- Add "Save to Calendar" for election dates
- Add share functionality
