const typingText = [
    "creating digital experiences...",
    "building projects...",
    "learning new technologies...",
    "turning ideas into reality..."
];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex >= typingText.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 35 : 70);
}

typeEffect();


const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const cards = document.querySelectorAll(".skill-card, .project-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.12
    }
);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});