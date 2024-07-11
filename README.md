# React-Native-Expo-App
# welcome to our expo app

# DAY 1 ( 9 JUly'24 )

   # CMDS
    npx create-expo-app demo_app
    cd demo_app
    npx expo start

   # Install Required Dependencies
     npm install firebase @react-native-firebase/app @react-native-firebase/auth
     npm install @react-navigation/native @react-navigation/stack
     npx expo install react-native-screens react-native-safe-area-context
   
   # User Authentication using Firebase 
            1.SignUp.js
            2.Login.js
            3.Logout.js
  # DAY 2 (10 July'24 )
  # Game Card Feed:
    Created a component to fetch and display game cards.
    Used pagination to load more cards on scroll.

  # Game Detail Screen:
    Display detailed information about the selected game.
    The "Join" button is included to participate in the game.

  # Game Dashboard:
    Created a dashboard to show game details and live pedometer data.
    npm install expo-sensors  

# APP Architecture
## 1. Setup the Development Environment
        Install Expo CLI globally.
        Initialize a new Expo project using the expo init command.
        Install necessary dependencies such as react-navigation, firebase, and expo-sensors.
## 2. Implement Basic Authentication:
       Set up Firebase for authentication.
       Create Firebase project and configure it.
       Implement sign-up, login, and logout functionalities using Firebase authentication.
       Store user information locally or in a state management library.
## 3. Create the Game Card Feed:
       Design a game card feed to display multiple game cards with pagination.
       Each game card includes the game title, a brief description, and an image.
       Implement navigation from the game card feed to the game detail screen.
## 4. Game Detail Screen:
       Create a screen to display detailed information about a game.
       Include a "Join" button to allow users to join the game.
## 5. Develop the Game Dashboard:
      Design the game dashboard to display all game details once a user joins a game.
      Integrate a live pedometer using the device's built-in sensors via the expo-sensors package.
      Ensure the pedometer updates step counts in real-time within the app.
      Handle background tracking to ensure the pedometer continues to function when the app is not in the foreground.
## 6. Navigation and Routing:
      Use React Navigation to handle navigation between different screens (Login, SignUp, GameCardFeed, GameDetail, 
      and GameDashboard).
      Set up stack navigation to manage screen transitions.
