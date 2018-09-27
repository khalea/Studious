// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

let apiKey = config.fbKey;
let projID = config.fbID;

// Function to create new sesh via form on home.html
function createSesh() {
    console.log("Made it this far!");

    // Text Fields to Save Data From -- Form
    let university = document.getElementById("school").value;
    let building = document.getElementById("buildingRoom").value;
    let subject = document.getElementById("subjectCourse").value;
    let purpose = document.getElementById("purpose").value;

    // Generate SeshID & Create Document in seshColl
    // Add a new document in collection "cities"




    // Add Data from Form to Document
}



