function validateForm() {
    var studentNumber = document.getElementById("studentNumber").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (studentNumber === "" || firstName === "" || lastName === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}
