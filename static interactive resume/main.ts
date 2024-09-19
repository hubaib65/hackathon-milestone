const skillsButton = document.getElementById('button-for-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLButtonElement

skillsButton.addEventListener('click' , ()=> {
    if(skills.style.display=== 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});