# Massachusetts Voter Registration - Mobile-Friendly Mockup

⚠️ **UNOFFICIAL MOCKUP** - This is a mobile-friendly redesign demonstration of the Massachusetts voter registration search page. For official voter registration information, visit [sec.state.ma.us/voterregistrationsearch](https://www.sec.state.ma.us/voterregistrationsearch/).

## About This Project

This project is a responsive, mobile-friendly redesign of the Massachusetts Secretary of State's voter registration search page. The official page, while functional, is not optimized for mobile devices. This mockup demonstrates how the same functionality could be presented with a modern, mobile-first design.

### Key Improvements

1. **Mobile-First Design** - Optimized for small screens first, then enhanced for larger displays
2. **Native Date Picker** - Uses the device's built-in date picker instead of three separate dropdowns
3. **Responsive Layout** - All elements adapt smoothly from mobile to desktop
4. **Larger Touch Targets** - Buttons and inputs are sized appropriately for touch screens (minimum 44px)
5. **Collapsible Navigation** - Hamburger menu on mobile to save screen space
6. **Better Typography** - Readable font sizes that scale appropriately across devices
7. **Improved Information Hierarchy** - Clear visual organization of voter registration details
8. **Accessibility Features** - Proper ARIA labels, keyboard navigation, high contrast support

## Files

- `index.html` - Mobile-friendly search form
- `results.html` - Mobile-friendly results page showing voter registration details
- `styles.css` - Responsive CSS with mobile-first approach
- `script.js` - JavaScript for interactivity and form validation

## Features

### Search Page (`index.html`)
- Simplified header with collapsible mobile navigation
- Language selector for accessibility
- Clean form with:
  - Name fields (first and last)
  - Native date picker for date of birth
  - Zip code input with validation
  - Agreement checkbox
  - Clear and Search buttons

### Results Page (`results.html`)
- Voter registration status with clear visual indicators
- Polling location information
- City/Town clerk contact details
- Complete list of elected officials organized by:
  - Statewide office holders
  - District representatives (Congressional, State Senate, State Representative, etc.)

## Responsive Breakpoints

- **Mobile**: < 640px - Single column layout, hamburger menu
- **Tablet**: 640px - 1023px - Two-column grids, expanded navigation
- **Desktop**: ≥ 1024px - Optimized spacing, full navigation

## Technical Details

### CSS Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (variables) for consistent theming
- Media queries for responsive design
- Accessibility support for:
  - Reduced motion preferences
  - High contrast mode
  - Print styles

### JavaScript Features
- Mobile menu toggle
- Form validation
- Language selector (prepared for future implementation)
- Zip code input masking
- Focus management for accessibility

## Usage

Simply open `index.html` in a web browser to view the search page. The `results.html` page shows an example of how results would be displayed (using sample data).

### Testing on Different Devices

**Desktop:**
- Open in browser and resize window to see responsive behavior

**Mobile:**
- Use browser's device emulation (Chrome DevTools, Firefox Responsive Design Mode)
- Or serve the files and access from a mobile device

## Future Enhancements

To make this a fully functional live application:

1. **Backend Integration** - Connect to the MA voter registration database
2. **Language Translation** - Implement actual translation for all supported languages
3. **State Seal Asset** - Add the official Massachusetts state seal image
4. **Error Handling** - Comprehensive error states and loading indicators
5. **Progressive Web App** - Add offline support and app-like features
6. **Analytics** - Track usage to improve user experience
7. **Automated Testing** - Add unit and integration tests

## Contributing

This is a demonstration project. Suggestions and improvements are welcome! Feel free to:
- Open an issue for bugs or feature requests
- Submit a pull request with improvements
- Use this as inspiration for other government website redesigns

## Disclaimer

This is an **unofficial mockup** created for demonstration purposes only. It is not affiliated with, endorsed by, or officially connected to the Massachusetts Secretary of State's office or the Commonwealth of Massachusetts.

For official voter registration information, always visit the official Massachusetts Secretary of State website at [sec.state.ma.us/voterregistrationsearch](https://www.sec.state.ma.us/voterregistrationsearch/).

## License

This mockup is provided as-is for educational and demonstration purposes.

## Acknowledgments

- Original site: Massachusetts Secretary of State - William Francis Galvin
- Design inspiration: Modern mobile-first web design principles
- Built with: HTML5, CSS3, JavaScript (Vanilla)
