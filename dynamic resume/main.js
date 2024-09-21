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
    var resumeHTML = "\n    <h2><b> resume</b></h2>\n \n    <h3>personal information</h3>\n    <p><b>Name:</b>".concat(name, "\n    <p><b>Email:</b>").concat(email, "\n    <p><b>Phone-Number:</b>").concat(phoneNumber, "\n\n    <h3>Qualification</h3>\n    <p>").concat(Qualification, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume requirement is missing');
    }
});
