import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA3tmwUlt4T0nUWZC37Z25sw-KYZwvr-qQ",
    authDomain: "virtual-desk-react.firebaseapp.com",
    projectId: "virtual-desk-react",
    storageBucket: "virtual-desk-react.appspot.com",
    messagingSenderId: "409540928067",
    appId: "1:409540928067:web:7f2553be3c32f190b02af6",
    measurementId: "G-CYHBW9DJJE"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAnalytics = firebase.analytics();
