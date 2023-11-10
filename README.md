# React Native Setup 
## System Requirements:

- **CPU:** Intel Core i7
- **RAM:** 16GB
- **Operating System:** Windows 10

## Installation Instructions:

1. **Install Node.js:** Node.js is essential for React Native.
   - [Download the latest LTS version of Node.js.](https://nodejs.org/en/download/)

2. **Java Development Kit (JDK):** Required for React Native.
   - [Download and install JDK from the official site.](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 
   
   > Note: Prefer using Node 16 or newer. JDK versions above 11 might lead to compatibility issues.

## Configuration Steps:

### Android Development Setup:

1. [Download and install Android Studio.](https://developer.android.com/studio/)
   - During installation, select "Android SDK" and "Android Virtual Device".

2. **Configure Environment Variables:** 
   - Set `ANDROID_HOME` to your Android SDK path.
   - Add `platform-tools` to your system PATH.

## Project Initialization:

1. Open your terminal or command prompt, navigate to your project directory.
2. Run `npm install` to install npm.
3. Create a new app with `npx react-native@latest init MyReactNativeApp`.

### Setting Up a Virtual Device:

1. In Android Studio, go to "Virtual Device Manager" under "More Actions".
2. Click "Create Device", select a phone model, and proceed with "Next".
3. Choose a system image for the emulator.

## Running the Project:

1. Open the `android` folder of your project in Android Studio.
2. Use "Build" > "Make Project".
3. After a successful build, click "Run" and select an emulator or connected device.

## Troubleshooting:

- **Metro Bundler Issues:** 
  - Run `npx react-native start --reset-cache` to clear the cache.

- **Build Errors:**
  1. Check your `ANDROID_HOME` environment variable.
  2. If persistent, remove `node_modules` and `package-lock.json`, then execute `npm install`.

## Additional Resources:

- [React Native Official Documentation](https://reactnative.dev/docs/environment-setup)
- [React Native Community and Support](https://reactnative.dev/help)
