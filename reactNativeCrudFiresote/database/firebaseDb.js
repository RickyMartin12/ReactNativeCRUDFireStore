import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZx7WyB9JFQss6LmNhxZUnqQJdW_Sd6Vs",
    authDomain: "reactnativefirebase-461ed.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-461ed.firebaseio.com",
    projectId: "reactnativefirebase-461ed",
    storageBucket: "reactnativefirebase-461ed.appspot.com",
    messagingSenderId: "9719725248",
    appId: "1:9719725248:web:4916a2917dfae353780125"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;