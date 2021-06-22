  import firebase from 'firebase';

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAkSx4iDGxEEwZgqEAVx9Lk8kdcg2pj1d8",
    authDomain: "shipping-services-8dda0.firebaseapp.com",
    databaseURL: "https://shipping-services-8dda0-default-rtdb.firebaseio.com",
    projectId: "shipping-services-8dda0",
    storageBucket: "shipping-services-8dda0.appspot.com",
    messagingSenderId: "261193240489",
    appId: "1:261193240489:web:872b30608e65ad9a01beb8",
    measurementId: "G-SBJVX3B8TD"
  });

  const db=firebaseApp.firestore();

  export default db;