function showForm() {
    let myNode = document.getElementById('info');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    let formCode = "<div class=\"card\" id=\"form\">\n" +
        "        <div class=\"container\">\n" +
        "            <h2><b class=\"cardTitle\">Sarah Tonin + Introductory Neuroscience</b></h2>\n" +
        "            <p><i>Wanna study at Wells Quad?</i></p>\n" +
        "        </div>\n" +
        "    </div>"

    document.getElementById('info').innerHTML = formCode;
}