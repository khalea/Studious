// Function that brings up the New Sesh form
function showForm() {
    let myNode = document.getElementById('info');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    let formCode = "<div class=\"card\" id=\"form\">\n" +
        "               <div class=\"container\">\n" +
        "                   <h1><b class=\"cardTitle\" style='font-size: 36px;'>Create Your Sesh.</b></h1>\n" + "<br>\n" +
        "                   <input type='text' class='formData' id='school' placeholder='University' style='padding: 16px; margin: 8px'> \n" + "<br>\n" +
        "                   <input type='text' class='formData' id='buildingRoom' placeholder='Building & Room #' style='padding: 16px; margin: 8px'> \n" + "<br>\n" +
        "                   <input type='text' class='formData' id='subjectCourse' placeholder='Subject' style='padding: 16px; margin: 8px'>\n" + "<br>\n" +
        "                   <textarea type='text' class='formData' id='purpose' placeholder='Purpose, Assignment, etc' style='padding: 16px; margin: 8px'></textarea>\n" + "<br>\n" +
        "                   <input type='submit' id='newSeshSubmit' value='Create' onclick()='createSesh()'>\n" +
        "               </div>\n" +
        "           </div>";


    document.getElementById('info').innerHTML = formCode;
}


