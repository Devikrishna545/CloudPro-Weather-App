# ☁️ CloudPro Weather App

<div align="center">

A modern, elegant weather dashboard built with React that displays real-time weather information with a stunning glassmorphism UI design.

[Live Demo](#) • [Report Bug](https://github.com/Devikrishna545/CloudPro-Weather-App/issues) • [Request Feature](https://github.com/Devikrishna545/CloudPro-Weather-App/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 About

CloudPro is a responsive weather application that demonstrates seamless API integration in React. It features a beautiful glassmorphism design with Bootstrap styling and provides users with current weather conditions for any location.

**Key Learning Objectives:**
- Understanding API integration in React
- Working with environment variables
- Building responsive, modern UIs
- Managing state and side effects with React Hooks

---

## ✨ Features

- 🎨 **Modern Glassmorphism UI** - Sleek, transparent design with blur effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🔄 **Real-time Weather Data** - Fetches current weather from OpenWeatherMap API
- 🎯 **Interactive Sidebar** - Toggle navigation with smooth animations
- 🌡️ **Comprehensive Weather Info** - Temperature, humidity, wind speed, and more
- 🖼️ **Dynamic Weather Icons** - Visual representation of weather conditions
- ⚡ **Fast & Lightweight** - Optimized for performance

---

## 🎬 Demo

<!-- Add screenshots or GIF of your app here -->
> *Coming soon: Add screenshots or a GIF demonstrating the app in action*

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

Check your versions:
```bash
node --version
npm --version
```

### Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devikrishna545/CloudPro-Weather-App.git
   cd CloudPro-Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   - Visit [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account
   - Generate your API key from the dashboard
   - Create a `.env` file in the project root:
     ```env
     REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
     ```
   
   > ⚠️ **Important:** Never commit your `.env` file to version control!

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open automatically at [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

1. Launch the application
2. Use the sidebar navigation to explore different features
3. View current weather conditions displayed in the weather card
4. The app automatically fetches weather data for the configured location

---

## 📁 Project Structure

```
CloudPro-Weather-App/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App favicon
├── src/
│   ├── components/
│   │   ├── Header.js       # Top navigation header
│   │   ├── Sidebar.js      # Sidebar navigation with toggle
│   │   └── WeatherCard.js  # Main weather display component
│   ├── App.js              # Root component
│   ├── index.js            # App entry point
│   └── styles.css          # Global styles & glassmorphism effects
├── .env                    # Environment variables (not tracked)
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies & scripts
└── README.md               # Project documentation
```

---

## 🛠️ Technologies

This project is built with:

- **[React](https://reactjs.org/)** - Frontend library
- **[Bootstrap](https://getbootstrap.com/)** - CSS framework
- **[OpenWeatherMap API](https://openweathermap.org/api)** - Weather data provider
- **[Create React App](https://create-react-app.dev/)** - Project scaffolding
- **CSS3** - Custom glassmorphism styling

---

## 🌐 API Reference

This app uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current).

**Example API Call:**
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**API Features Used:**
- Current weather data
- Weather conditions and descriptions
- Temperature, humidity, wind speed
- Weather icons

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on edits.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. Optimizes the build for best performance.

### `npm run eject`
**Note:** This is a one-way operation. Ejects from Create React App to give you full control over configuration files.

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👤 Contact

**Devikrishna545** - [@Devikrishna545](https://github.com/Devikrishna545)

Project Link: [https://github.com/Devikrishna545/CloudPro-Weather-App](https://github.com/Devikrishna545/CloudPro-Weather-App)

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Create React App](https://create-react-app.dev/) for the project boilerplate
- [Bootstrap](https://getbootstrap.com/) for the UI framework
- The React community for excellent documentation and resources

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and React

</div>
