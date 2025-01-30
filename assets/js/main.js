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

const projectData = {
    "chatbot": {
        title: "🤖 AI Chatbot: Rate My Professor",
        description: "Developed an AI chatbot using Next.js for the frontend and a Python backend, leveraging OpenAI GPT-3.5-turbo with Retrieval-Augmented Generation (RAG) for accurate, dataset-driven responses. The chatbot allows users to query professor-related information, such as identifying professors who do not require attendance, and displays the top three relevant results. Utilized JavaScript and Python to create a seamless, data-driven virtual assistant experience.",
    },
    "flashcards": {
        title: "📝 AI Flashcard Generator",
        description: "Collaborated on the development of an AI-powered flashcard generator as part of the Headstarter AI Fellowship. The software generates customizable flashcards with answers on the back, using Next.js for the frontend, Firebase for the database, and Clerk for user authentication. Integrated OpenAI GPT-3.5-turbo for flashcard generation and implemented a tiered pricing model with free and paid options using Stripe.",
        link: "https://github.com/giuliobarde/AI-Flashcards-SaaS-Stripe"
    },
    "pantry": {
        title: "🥘 AI Pantry Tracker",
        description: "Developed a comprehensive pantry management system using Next.js, featuring functionalities such as adding and removing items, tracking expiration dates, searching for items, and generating recipes using AI based on pantry contents. Designed a modern, responsive user interface that adapts seamlessly to various screen sizes, ensuring an intuitive user experience.",
        link: "https://github.com/giuliobarde/pantry_app"
    },
    "chess": {
        title: "♟ Chess App",
        description: "Developed a fully functional chess application using the React framework with TypeScript, incorporating key data structures such as arrays, interfaces, and lambda expressions. The app validates moves and ensures adherence to chess rules.",
        link: "https://github.com/giuliobarde/Chess-App"
    }
};

// Expand Project (Open Modal)
function expandProject(projectId) {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    if (projectData[projectId]) {
        modalTitle.innerHTML = projectData[projectId].title;
        modalDescription.innerHTML = projectData[projectId].description;

        // Check if the project has a link
        if (projectData[projectId].link) {
            modalLink.href = projectData[projectId].link;
            modalLink.style.display = "inline-block"; // Show the link if it exists
        } else {
            modalLink.style.display = "none"; // Hide the link if there's no link
        }

        modal.style.display = "flex";
    }
}

// Close Modal
function closeProject() {
    document.getElementById("project-modal").style.display = "none";
}

//  Close on Click Outside
window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeProject();
    }
};
