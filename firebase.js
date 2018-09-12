let apiKey = config.fbKey;
let projID = config.fbID;

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp ({
    apiKey: apiKey,
    authDomain: "<" + projID + ">.firebaseapp.com",
    projectID: projID
});

// Initialize cloud firestore through firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
   timestampsInSnapshots: true
});