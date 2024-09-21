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
    <h2><b> resume</b></h2>
 
    <h3>personal information</h3>
    <p><b>Name:</b>${name}
    <p><b>Email:</b>${email}
    <p><b>Phone-Number:</b>${phoneNumber}

    <h3>Qualification</h3>
    <p>${Qualification}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>Skills</h3>
    <p>${Skills}</p>

    `;

    if(resumeDisplay){
        resumeDisplay.innerHTML=resumeHTML;
    }else{
        console.error('the resume requirement is missing');
    }
});
