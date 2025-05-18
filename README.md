# Industrial Stats Widget

A Windows 11 widget that displays industrial license statistics and pending requests.

## Browser Installation Instructions (Recommended)

1. **Host these files on a web server** (local development server or any web hosting)
2. **Open the webpage** in Microsoft Edge or Google Chrome
3. **Click the "Install" button** in the app or use the browser's menu:
   - In Edge: Click the "..." menu → Apps → Install this site as an app
   - In Chrome: Click the "..." menu → Install Industrial Stats Widget
4. After installation, the app will:
   - Appear in your Start menu
   - Be available to add to the Windows Widget panel

## Manual Installation

If the browser installation doesn't work:

1. Create a folder with all these files in a suitable location on your computer
2. Create an "images" subfolder and add appropriate icon images (44x44 and 128x128)
3. Update the API_URL in index.html to point to your actual REST service
4. Open index.html in your browser and follow the installation steps above

## Configuration

Update the API_URL variable in the index.html file to point to your actual REST API endpoint:

```javascript
const API_URL = "https://your-rest-service-url.com/api";
```

The widget will automatically update every 5 minutes while the browser tab or installed app is open.
