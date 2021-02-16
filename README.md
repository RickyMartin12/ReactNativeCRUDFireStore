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

```java
    sdk.dir = /Users/<YOUR_USERNAME>/Library/Android/sdk
```

In Windows

```java
    sdk.dir= C:\\Users\\<YOUR_USERNAME>\\AppData\\Local\\Android\\sdk
```

In Linux

```java
    sdk.dir= /home/USERNAME/Android/Sdk
```

### Setup Firebase Project

- Type the this url: [console.firebase.google.com](https://console.firebase.google.com/) on your browser and then click on “Create a project”.

![react-native-firebase-8987-01](https://user-images.githubusercontent.com/9846274/107993308-3486d900-6fd2-11eb-8906-96d7d61be2a8.png)
![Captura de ecrã 2021-02-15, às 21 13 54](https://user-images.githubusercontent.com/9846274/107993643-d7d7ee00-6fd2-11eb-8168-2356c10d6d62.png)

### Firebase project new features

#### Add Android App on Firebase project

- Add Firebase to your Android app on Firebase Project 'ReactNativeFirebase'. Don’t forget to download the configuration file and keep clicking on next until the process is done.

![Captura de ecrã 2021-02-15, às 22 16 40](https://user-images.githubusercontent.com/9846274/108002715-5ee39100-6fe8-11eb-9662-db66d95af6d5.png)

![Captura de ecrã 2021-02-15, às 22 27 52](https://user-images.githubusercontent.com/9846274/108002716-5ee39100-6fe8-11eb-9010-8584f5bf24ee.png)

#### Add Web App on Firebase project

- Add Firebase on Web Project onn Firebase Project 'ReactNativeFirebase'

- Follow the instructions add firebase project on web app

![Captura de ecrã 2021-02-15, às 23 28 41](https://user-images.githubusercontent.com/9846274/108002713-5e4afa80-6fe8-11eb-9e49-e7888607a4ac.png)

![Captura de ecrã 2021-02-15, às 23 29 22](https://user-images.githubusercontent.com/9846274/108002710-5d19cd80-6fe8-11eb-87f7-33f5cc24f442.png)

#### Add Cloud Firestine on Firebase Project

- Create a new cloud firestone

- Next, click on “Develop > Database” menu. Here, we have to create Cloud Firestore database so click on “Create database” button and remember for the development purpose we are setting up the security rules for Cloud Firestore in test mode.

![react-native-crud-9020-05](https://user-images.githubusercontent.com/9846274/108003413-a4a15900-6fea-11eb-87ae-a1dad7e47cc1.jpg)

- Next, create collection in Cloud Firestore. Let’s create ‘users’ collection with name, email and mobile values.

![Captura de ecrã 2021-02-16, às 00 04 50](https://user-images.githubusercontent.com/9846274/108003409-9f440e80-6fea-11eb-879d-f2f6a411b136.png)

## Adding Native Code

This project can be run from a web browser or the Expo client app. You may find that you want to add more native code later on. You can do this by ejecting the project and rebuilding it yourself.

- Run `yarn eject` ou `npm run eject` to create the native projects such as: Android, IOS e Web
- You can still run your project in the web browser or Expo client, you just won't be able to access any new native modules you add.

- Run npm on web / android / ios

```bash
   $ npm run android
   $ npm run ios
   $ npm run web
```

### Run React Native in Android App

- List Users

![Screenshot_2021-02-15-23-56-48-078_com ricardopeleira reactnativecrudfiresote](https://user-images.githubusercontent.com/9846274/108003665-5ccf0180-6feb-11eb-8128-6595b09bf4ee.jpg)

- Add a new User

![Screenshot_2021-02-15-23-58-00-050_com ricardopeleira reactnativecrudfiresote](https://user-images.githubusercontent.com/9846274/108003670-5e98c500-6feb-11eb-9159-efb47ce2eea4.jpg)

- Update and Delete an user

![Screenshot_2021-02-15-23-58-36-079_com ricardopeleira reactnativecrudfiresote](https://user-images.githubusercontent.com/9846274/108003672-5f315b80-6feb-11eb-8f8d-2aacc8594111.jpg)

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.io/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.io/distribution/publishing-websites/).
