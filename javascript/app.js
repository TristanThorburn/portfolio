// Project Accordion
const projects = {}

projects.container = document.querySelectorAll(".project-container");

projects.accordion = () => {
    projects.container.forEach(project =>{
        project.addEventListener("click", (e) => {
            project.classList.toggle("active")
            console.log(e.target);
            
            const projectDetails = e.target.parentNode.parentElement.nextElementSibling;
            if(e.target.parentNode.parentElement.classList.contains("active")){
                projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
            }
            else{
                projectDetails.style.maxHeight = 0;
            }
        });
    });
};

projects.init = () => {
    projects.accordion();
};

projects.init();
// Tech section slider
const tech = {};

tech.icons = document.querySelector(".tech-icons");
tech.info = document.querySelector(".tech-info");
tech.section = document.querySelector(".tech")
tech.text = document.querySelector(".tech-text");

tech.slider = () => {
    tech.section.addEventListener('click', () => {
        tech.icons.classList.toggle('is-hidden');
        tech.info.classList.toggle('is-hidden');
    })
}

tech.reverse = () => {
    tech.info.addEventListener('click', () => {
        tech.icons.classList.toggle('is-hidden');
        tech.info.classList.toggle('is-hidden');
    })
}

tech.init = () => {
    tech.slider();
    tech.reverse();
};

tech.init();