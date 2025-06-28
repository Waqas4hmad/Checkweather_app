# 🌦 React Native  Check Weather App
A weather app built with React Native (Expo) that lets users:

Search for any city in the world using WeatherAPI

View a list of previously searched cities

Tap on a city to see detailed weather data

Automatically display the current location weather if no city is selected

Store the last selected city using AsyncStorage

Manage state using Redux


🧰 Tech Stack
React Native (with Expo)

TypeScript

WeatherAPI (https://www.weatherapi.com/)

Axios for API calls

Redux & Redux Toolkit

AsyncStorage for persistence

Expo Location for GPS-based weather

🚀 Features
Search any city and fetch weather info

Store and list previously searched city

Detect and show weather for the current location

Redux-powered state management

Persist last selected city using AsyncStorage

🔧 Project Setup

1. Clone the Repo
git clone  https://github.com/Waqas4hmad/Checkwheater.git
cd checkweather

2. Install Dependencies
Make sure you have Expo CLI installed:
npm install -g expo-cli
Now install project dependencies:

3. Set Up WeatherAPI
Create an account at WeatherAPI

Generate your API key
4. Configure API Key
Create a new file:

touch src/config.ts
Add the weather key in.env file:

// .env
export const EXPO_PUBLIC_WEATHER_API_KEY = "your_api_key_here";

Project Structure
arduino
Copy
Edit
.
├── app
├── src
│   ├── assets
│   ├── components
│   │   └── CurrentWeather
│   │   └── LocationList
│   │   └── SearchBar
│   │   └── ThemedText.tsx
│   │   └── ThemeToggle.tsx
│   ├── constants
│   │   └── index.ts
│   │   └── Colors.ts
│   │   └── ScreenName.ts
│   ├── contexts
│   │   └── ThemeContext.tsx
│   ├── enum
│   ├── helpers
│   ├── navigation
│   │   └── AppNavigation.tsx
│   ├── redux
│   │   ├── action
│   │   └── reducer
│   │   └── store
│   ├── screens
│   │   ├── Home
│   ├── utils
│   │   └── storage.ts
│   └── types


### State Management (Redux)

Weather data

Selected city

List of searched cities

store.ts is the Redux store configuration

### AsyncStorage
We use AsyncStorage to:

Save the last selected city

Load it on app launch to display its weather data

### Location (Expo Location)
Used when there’s no selected city, to detect and display the current location weather.

Permissions handled via expo-location.

### API Integration (Axios)
All API logic is abstracted in:

### Running the App

npx expo start
Scan the QR code using Expo Go on your iOS or Android device.

### Permissions Required
Add this in your app.json:

"expo": {
  "plugins": [
    [
      "expo-location",
      {
        "isAndroidBackgroundLocationEnabled": false
      }
    ]
  ],
  "android": {
    "permissions": ["ACCESS_FINE_LOCATION"]
  }
}

### Contributing
Feel free to fork and improve. Pull requests are welcome!

Let me know if you also want the complete working codebase for the above README.

