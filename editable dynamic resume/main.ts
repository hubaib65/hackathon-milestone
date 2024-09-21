var form = document.getElementById('resume-form') as HTMLFormElement ;
var resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    const name = (document.getElementById('Name') as HTMLInputElement).value
    const email = (document.getElementById('Email') as HTMLInputElement).value
    const phoneNumber = (document.getElementById('Phone') as HTMLInputElement).value
    const Qualification = (document.getElementById('Qualification') as HTMLInputElement).value
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value


    const resumeHTML = `
    <h2><b>Editable resume</b></h2>
 
    <h3>personal information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone-Number:</b><span contenteditable="true">${phoneNumber}</span></p>

    <h3>Qualification</h3>
    <p span contenteditable="true">${Qualification}</p>

    <h3>Experience</h3>
    <p span contenteditable="true">${Experience}</p>

    <h3>Skills</h3>
    <p span contenteditable="true">${Skills}</p>

    `;

    if(resumeDisplay){
        resumeDisplay.innerHTML=resumeHTML;
    }else{
        console.error('the resume requirement is missing');
    }
});
