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
let firestore = firebase.firestore();

// Disable deprecated features
firestore.settings({
   timestampsInSnapshots: true
});

// Collection (Sesh) -> Document (SeshID) -> Data (Host/UserID, University, Building, Room, Address, AddLater[Attendees])
let seshColl = db.collection('seshes'); // Collection of Seshes

// Function to create new sesh via form on home.html
function createSesh() {
    // Generate SeshID & Create Document in seshColl

    // Add Data from Form to
}

// Collection (Users) -> Document (UserID) -> Data (First, Last, DOB, University, AddLater[Friends])
let userColl = db.collection('users'); // Collection of users


