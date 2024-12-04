      ## Git

## Folder Structure (general) ##

```bash
    Tasks_STRUCTURE
      ├── LICENSE
      ├── README.md - You are here!  
      ├── android/ # Android-specific files and configuration
      │   └── app/ # Android app source files
      │   └── build.gradle # Gradle configuration for Android build
      │   └── AndroidManifest.xml # Android app manifest
      ├── ios/ # iOS-specific files and configuration
      │   └── MyApp/ # iOS app source files
      │   └── Info.plist # iOS app configuration
      │   └── Podfile # CocoaPods dependencies for iOS
      ├── expo/ # Expo configuration for projects using Expo
      │   └── app.json # Expo project configuration
      │   └── assets/ # Expo assets like images, fonts, etc.
      ├── assets/ # General assets like images, icons, fonts
      │   └── # Place all asset files here (e.g., logo.png)
      ├── src/ # Main source code
      │   ├── api/ # API services or calls
      │   │   └── apiService.ts # Services for API interaction
      │   ├── assets/ # Assets like images, icons, fonts (specific to code)
      │   ├── components/ # Reusable UI components
      │   │   ├── Button/ # For Button component
      │   │   │   └── index.tsx # Component implementation
      │   │   │   └── styles.ts # Styles for Button component
      │   │   ├── Input/ # For Input component
      │   │   │   └── index.tsx
      │   │   │   └── styles.ts
      │   ├── contexts/ # Context for global state management
      │   │   └── AuthContext.tsx # Example: user authentication context
      │   ├── hooks/ # Custom reusable hooks
      │   │   └── useAuth.ts # Example: hook for authentication logic
      │   ├── navigation/ # Navigation setup (React Navigation)
      │   │   └── AppNavigator.tsx # Navigation routing setup
      │   ├── screens/ # Application screens (organized by feature)
      │   │   ├── AuthScreen/ 
      │   │   │   └── index.tsx # Screen component
      │   │   │   └── styles.ts # Styles for LoginScreen
      │   │   ├── HomeScreen/ 
      │   │   │   └── index.tsx
      │   │   │   └── styles.ts
      │   ├── styles/ # Global styles (for colors, typography, etc.)
      │   │   └── global.ts # Global styling constants
      │   ├── utils/ # Utility functions or constants
      │       └── helpers.ts # Helper functions
      ├── package.json # NPM/Yarn configuration
      ├── app.json # Configuration specific to React Native
      ├── babel.config.js # Babel configuration
