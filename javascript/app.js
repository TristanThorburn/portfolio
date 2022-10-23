// Mobile Hamburger
const hamburger = {};

hamburger.showMenu = () => {
    hamburger.button = document.querySelector(".hamburger");

    hamburger.button.addEventListener("click", () => {
        const menu = document.querySelector(".desktop-nav");

        menu.classList.toggle("active");
        hamburger.button.classList.toggle("active");
    })
}

hamburger.hideMenu = () => {
    const closeMenu = document.querySelectorAll(".menu-link");

    closeMenu.forEach(link => {
        link.addEventListener("click", () => {
            const menu = document.querySelector(".desktop-nav");
            menu.classList.remove("active");
            hamburger.button.classList.remove("active");
        })
    })
}

hamburger.init = () => {
    hamburger.showMenu();
    hamburger.hideMenu();
}

hamburger.init();

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

// Project Accordion
const projects = {};

projects.container = document.querySelectorAll(".project-container");

projects.accordion = () => {
    projects.container.forEach(project =>{
    project.addEventListener("click", (e) => {
        if(window.innerWidth <= 1199){
            project.classList.toggle("active")
            
                const projectDetails = e.target.parentNode.parentElement.nextElementSibling;
                if(e.target.parentNode.parentElement.classList.contains("active")){
                    projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
                }
                else{
                    projectDetails.style.maxHeight = 0;
                }
            }
            else{
                project.removeEventListener("click", e);
            }
        });
    });
};

projects.init = () => {
    projects.accordion();
};

projects.init();

// Eggy

const eggy = {};

eggy.cracked = () => {
    eggy.secret = document.querySelector(".secret");

    eggy.secret.addEventListener("dblclick", () => {
        const proj = document.querySelector(".eggy");
        eggy.secret.classList.toggle("active");
        proj.classList.toggle("active");

        if(proj.classList.contains("active")){
            proj.style.maxHeight = proj.scrollHeight + "px";
        }
        else{
            proj.style.maxHeight = 0;
        }
    })
}

eggy.init = () => {
    eggy.cracked();
}

eggy.init();

// Contact Accordion
const contact = {};

contact.accordion = () => {
    contact.container = document.querySelector(".contact");

    contact.container.addEventListener("click", () => {
        contact.h2 = document.getElementById("contact");
        contact.form = document.querySelector(".contact-form");

        contact.h2.classList.toggle("active");

        if(contact.h2.classList.contains("active")){
            contact.form.style.maxHeight = contact.form.scrollHeight + "px";
        }
        else{
            contact.form.style.maxHeight = 0;
        }
    });
};

contact.init = () => {
    contact.accordion();
}

contact.init();

// Project Slider

// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;
// let maxSlide = slides.length -1;
// const nextSlide = document.querySelector(".slide-right");
// const prevSlide = document.querySelector(".slide-left");

// slides.forEach((slide, index) =>{
//     slide.style.transform = `translateX(${index * 100}%)`;
// });

// nextSlide.addEventListener("click", () => {
//     if(currentSlide === maxSlide){
//         currentSlide = 0;
//     }
//     else{
//         currentSlide++;
//     }

//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//     });
// });

// prevSlide.addEventListener("click", () => {
//     if (currentSlide === 0){
//         currentSlide = maxSlide;
//     }
//     else{
//         currentSlide--;
//     }

//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//     });
// });

