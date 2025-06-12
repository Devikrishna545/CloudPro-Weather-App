# CloudPro Weather App

CloudPro is a modern React weather dashboard that displays current weather information with a glassmorphism UI. It uses the [OpenWeatherMap API](https://openweathermap.org/api) and features a responsive sidebar, header, and weather card.

## Features

- Modern glassmorphism UI with Bootstrap and custom CSS
- Sidebar with toggle and navigation
- Responsive layout
- Current weather data fetched from OpenWeatherMap API
- Weather card with icon, image, and key weather details

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd weather-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your API key:**
   - Register at [OpenWeatherMap](https://openweathermap.org/api) and get your API key.
   - Create a `.env` file in the project root:
     ```
     REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
     ```

4. **Start the development server:**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
weather-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   └── WeatherCard.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
└── README.md
```

- **public/**: Contains the `index.html` and favicon.
- **src/**: Contains the React components and styles.
- **.env**: Environment variables (e.g., API key).
- **package.json**: Project metadata and dependencies.
- **README.md**: This file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
