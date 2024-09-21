var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var phoneNumber = document.getElementById('Phone').value;
    var Qualification = document.getElementById('Qualification').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    var resumeHTML = "\n    <h2><b>Editable resume</b></h2>\n \n    <h3>personal information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone-Number:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n\n    <h3>Qualification</h3>\n    <p span contenteditable=\"true\">").concat(Qualification, "</p>\n\n    <h3>Experience</h3>\n    <p span contenteditable=\"true\">").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p span contenteditable=\"true\">").concat(Skills, "</p>\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume requirement is missing');
    }
});
