var client = algoliasearch('RK202SK146', 'dd32c6fbcae6213ae686fb66500534fb');
var index = client.initIndex('your_index_name');

function showForm() {
    let myNode = document.getElementById('info');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    let formCode = "<div class=\"card\" id=\"form\">\n" +
        "              <script src=\"https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js\"></script>" +
        "              <script src=\"./algoliasearch.js\"></script>" +
        "               <div class=\"container\">\n" +
        "                   <h1><b class=\"cardTitle\" style='font-size: 36px;'>Create Your Sesh.</b></h1>\n" + "<br>\n" +
        "                   <input type='text' class='formData' id='subject' placeholder='Subject' style='padding: 16px; margin: 8px'>\n" + "<br>\n" +
        "                   <textarea type='text' class='formData' id='purpose' placeholder='Purpose, Assignment, etc' style='padding: 16px; margin: 8px'></textarea>\n" + "<br>\n" +
        "                   <input type='submit' id='newSeshSubmit' value='Create'>\n" +
        "               </div>\n" +
        "               <script> requestIndex.addObject($('form').serializeArray()); </script>"
        "           </div>";


    document.getElementById('info').innerHTML = formCode;
}
