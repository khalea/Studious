const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp ({
    apiKey: "APIKEY",
    authDomain: "FIREBASE AUTH DOMAIN",
    projectID: "roomed-1536374201940"
});

// Initialize cloud firestore through firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
   timestampsInSnapshots: true
});