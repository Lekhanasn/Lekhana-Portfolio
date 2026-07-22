const text = [
    "MERN Stack Developer",
    "Java Programmer",
    "Machine Learning Enthusiast",
    "Information Science Student"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!deleting) {
        typing.textContent = text[textIndex].substring(0, charIndex++);
    } else {
        typing.textContent = text[textIndex].substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === text[textIndex].length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀";
    }else{
        themeBtn.innerHTML = "🌙";
    }
});
const hiddenElements = document.querySelectorAll("section");

function revealSections() {

    hiddenElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

}

hiddenElements.forEach(section=>{
    section.classList.add("hidden");
});

window.addEventListener("scroll", revealSections);

revealSections();