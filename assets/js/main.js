// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle Dropdown Menu on Click
menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show");
    }
});
