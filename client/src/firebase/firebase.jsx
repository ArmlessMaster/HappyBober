import firebase from 'firebase/compat/app';
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA6M8JkBAHbYoIz_SwtLbLYr_C2aVQrMxk",
    authDomain: "happybober-23252.firebaseapp.com",
    databaseURL: "gs://happybober-23252.appspot.com",
    projectId: "happybober-23252",
    storageBucket: "happybober-23252.appspot.com",
    messagingSenderId: "41616306483",
    appId: "1:41616306483:web:48d2bb25e07e9c777d8e46"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
