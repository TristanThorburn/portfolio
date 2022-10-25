const cleanUp = {}

cleanUp.schedule = () => {
    outPut = document.querySelector(".desktop-description");
    document.addEventListener("scroll", () => {
        if(window.innerWidth < 1200 && outPut.childNodes.length > 0){
            outPut.innerHTML = "";
        }
    });
}

cleanUp.init= () => {
    cleanUp.schedule();
}

cleanUp.init();
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

projects.accordion = () => {
    projects.container = document.querySelectorAll(".project-container");
    projects.container.forEach(project =>{
    project.addEventListener("click", (e) => {
        if(window.innerWidth < 1200){
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

    eggy.secret.addEventListener("dblclick", (e) => {
        const proj = document.querySelector(".eggy");
        const clone = proj.cloneNode(true);
        const outPut = document.querySelector(".desktop-description");

        if(window.innerWidth < 1200){
            eggy.secret.classList.toggle("active");
            proj.classList.toggle("active");

            if(proj.classList.contains("active")){
                proj.style.maxHeight = proj.scrollHeight + "px";
            }
            else{
                proj.style.maxHeight = 0;
            }
        }else if(outPut.childNodes.length > 0){
            eggy.secret.classList.toggle("active");
            outPut.innerHTML = "";
        }
        else{
            eggy.secret.classList.toggle("active");
            outPut.appendChild(clone);
            clone.removeAttribute("style");
            clone.classList.toggle("slide");
            clone.classList.remove("eggy");
        }
    });
}

eggy.init = () => {
    eggy.cracked();
}

eggy.init();

// Project Append
const append = {};

append.show = () => {
    append.info = document.querySelectorAll(".slide");
    append.info.forEach(info => {
        info.addEventListener("click", (e) => {
            const display = e.target.parentElement.parentElement.nextElementSibling;
            const clone = display.cloneNode(true);
            const outPut = document.querySelector(".desktop-description");
            if(outPut.childNodes.length > 0){
                outPut.innerHTML = "";
            }
            else if(window.innerWidth >=1200){
                outPut.appendChild(clone);
                setTimeout(() => {clone.classList.remove("description")}, "200");
            }           
        })
    })
}

append.init = () => {
    append.show();
}

append.init();

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

const slider = {};
slider.slide = document.querySelectorAll(".slide");
slider.currentSlide = 0;
slider.maxSlide = slider.slide.length -2;
slider.next = document.querySelector(".slide-right");
slider.prev = document.querySelector(".slide-left");

slider.slide.forEach((slide, index) => {
    if(window.innerWidth >= 1200){
        slide.style.transform = `translateX(${index * 100}%)`;
    }
})

slider.reset = () => {
    window.onresize = () =>{
        if(window.innerWidth < 1200){
            slider.slide.forEach(slide =>{
                slide.removeAttribute("style");
            });
        }
        else{
            slider.slide.forEach((slide, index) => {
                if(window.innerWidth >= 1200){
                    slide.style.transform = `translateX(${index * 100}%)`;
                }
            })
        }
    }
}

slider.right = () => {
    slider.next.addEventListener("click", () => {
        if(slider.currentSlide === slider.maxSlide){
            slider.currentSlide = 0;
        }
        else{
            slider.currentSlide++;
        }

        slider.slide.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slider.currentSlide)}%)`;
        })
    });
}

slider.left = () => {
    slider.prev.addEventListener("click", () => {
        if (slider.currentSlide === 0){
                slider.currentSlide = slider.maxSlide;
            }
            else{
                slider.currentSlide--;
            }

        slider.slide.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slider.currentSlide)}%)`;
        })
    });
}

slider.init = () => {
    slider.reset();
    slider.right();
    slider.left();
};
slider.init();


