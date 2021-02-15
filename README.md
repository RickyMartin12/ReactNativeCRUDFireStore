# My Universal React Project - React Native CRUD on Cloud FireStore in Firebase

## 🚀 How to use

### First Install the packages on folder reactNativeCrudFirestore

- Go to the folder 'reactNativeCrudFiresote' using the command cd in windows, mac and linux

```bash
      Air-de-Ricardo:ReactNativeCRUDFireStore ricardopeleira$ cd reactNativeCrudFiresote
      $MacBook-Air-de-Ricardo:reactNativeCrudFiresote ricardopeleira$
```

- Add a new file on ReactNativeCRUDFireStore/android/local.properties
- Set the path on your android sdk

In Mac OS X

```
    sdk.dir = /Users/<YOUR_USERNAME>/Library/Android/sdk
```

In Windows

```
    sdk.dir= C:\\Users\\<YOUR_USERNAME>\\AppData\\Local\\Android\\sdk
```

In Linux

```
    sdk.dir= /home/USERNAME/Android/Sdk
```

### Setup Firebase Project

- Type the this url: [console.firebase.google.com](https://console.firebase.google.com/) on your browser and then click on “Create a project”.

![react-native-firebase-8987-01](https://user-images.githubusercontent.com/9846274/107993308-3486d900-6fd2-11eb-8906-96d7d61be2a8.png)
![Captura de ecrã 2021-02-15, às 21 13 54](https://user-images.githubusercontent.com/9846274/107993643-d7d7ee00-6fd2-11eb-8168-2356c10d6d62.png)

- Run npm on web / android / ios

```bash
   $ npm run android
   $ npm run ios
   $ npm run web
```

## Adding Native Code

This project can be run from a web browser or the Expo client app. You may find that you want to add more native code later on. You can do this by ejecting the project and rebuilding it yourself.

- Run `yarn eject` to create the native projects.
- You can still run your project in the web browser or Expo client, you just won't be able to access any new native modules you add.

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.io/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.io/distribution/publishing-websites/).

## 📝 Notes

- Learn more about [Universal React](https://docs.expo.io/).
- See what API and components are [available in the React runtimes](https://docs.expo.io/versions/latest/).
- Find out more about developing apps and websites: [Guides](https://docs.expo.io/guides/).
