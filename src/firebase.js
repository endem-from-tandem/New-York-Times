import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJ0q4HjsUoMxRU9MnU95vEbIgLW6BuZYI",
    authDomain: "old-york-times.firebaseapp.com",
    projectId: "old-york-times",
    storageBucket: "old-york-times.appspot.com",
    messagingSenderId: "1047994200568",
    appId: "1:1047994200568:web:bffb849f8abb5a9fce260d",
    measurementId: "G-PLDNH78XKZ"
  }

  // Initialize Firebase
  export const fapp = firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  export const auth = firebase.auth()

  export const db = firebase.firestore()
db.settings({timestampsInSnapshots:true})

