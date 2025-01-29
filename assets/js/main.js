// 🎯 Toggle Menu
const menuToggle = document.querySelector(".menu-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// 🚀 Scroll Reveal Animation
const revealSections = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    revealSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);
