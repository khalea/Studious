const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp ({
    apiKey: "AIzaSyAKwOc6H_aSbEGL-9OnIiV8Quo8fnew4O4",
    authDomain: "FIREBASE AUTH DOMAIN",
    projectID: "roomed-1536374201940"
});

// Initialize cloud firestore through firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
   timestampsInSnapshots: true
});