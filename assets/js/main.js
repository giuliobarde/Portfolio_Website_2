// Toggle Menu
const menuToggle = document.querySelector(".menu-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// Scroll Reveal Animation
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
    "portfolio-2": {
        title: "💼 Portfolio Website 2",
        date: "02/2025",
        description: "An updated version of my personal portfolio website, featuring a more polished design and enhanced functionality to better showcase my projects and skills.",
        link: "https://github.com/giuliobarde/portfolio_website_2",
    },
    "chatbot-rmp": {
        title: "🤖 AI Chatbot: Rate My Professor",
        date: "08/2024",
        description: "Developed an AI-powered chatbot using Next.js for the frontend and a Python backend, leveraging OpenAI GPT-3.5-turbo with Retrieval-Augmented Generation (RAG) for precise, data-driven responses. The chatbot answers professor-related inquiries and presents the top three relevant results, providing a streamlined and efficient user experience.",
    },
    "flashcards": {
        title: "📝 AI Flashcard Generator",
        date: "08/2024",
        description: "Collaborated on the development of an AI-powered flashcard generator as part of the Headstarter AI Fellowship. The application uses OpenAI GPT-3.5-turbo to create customizable flashcards, and integrates Firebase for data storage and Clerk for user authentication, with a tiered pricing model managed through Stripe.",
        link: "https://github.com/giuliobarde/AI-Flashcards-SaaS-Stripe"
    },
    "chatbot-usa": {
        title: "🤖 AI Chatbot: Customer Support",
        date: "08/2024",
        description: "Developed an AI chatbot for the Headstarter SWE Fellowship project, using Next.js and Firebase for backend integration and OpenAI GPT-3.5-turbo for intelligent, dataset-driven responses regarding U.S. state-related inquiries. The chatbot utilizes Retrieval-Augmented Generation (RAG) for enhanced accuracy.",
        link:"https://github.com/giuliobarde/Chat_Support",
    },
    "pantry": {
        title: "🥘 AI Pantry Tracker",
        date: "07/2024",
        description: "Created a pantry management system as part of the Headstarter SWE Fellowship. The app uses Next.js, Firebase, and Firestore for authentication and data storage. It allows users to manage items with multiple expiration dates, search for pantry items, and suggests recipes based on available ingredients using OpenRouter's AI API. Future improvements are planned for recipe generation accuracy.",
        link: "https://github.com/giuliobarde/pantry_app"
    },
    "portfolio-1": {
        title: "💼 Portfolio Website 1",
        date: "07/2024",
        description: "Built as part of the Headstarter SWE Fellowship, this initial portfolio website was designed using a template as a base, which was then customized and enhanced with new features such as timelines for coding projects and work experience, and additional sections for improved presentation.",
        link: "https://github.com/giuliobarde/portfolio_website",
    },
    "chess": {
        title: "♟ Chess App",
        date: "06/2024",
        description: "Developed a fully functional chess game using React and TypeScript, implementing core chess logic including move validation and special moves like castling and en passant. This project was a key learning experience in working with React and TypeScript to build interactive applications.",
        link: "https://github.com/giuliobarde/Chess-App"
    },
    "http-server": {
        title: "🖥️ HTTP-Server",
        date: "06/2024",
        description: "Built an HTTP server following a comprehensive course on CodeCrafters, gaining hands-on experience in server-side development and understanding fundamental web server architecture.",
        link: "https://app.codecrafters.io/users/giuliobarde",
    },
    "budgetting": {
        title: "💰 Budgeting Tool",
        date: "05/2024",
        description: "Developed a budgeting tool in collaboration with two peers for a Software Engineering class final project. The tool utilizes JavaFX and MySQL for managing school budgets, and includes features like profile creation, expense tracking, and reimbursement approval workflows.",
        link: "https://github.com/giuliobarde/HTTP-Server",
    },
    "text-processing": {
        title: "📚 Text Processing",
        date: "10/2023",
        description: "Created a text processing application as part of my Advanced Data Structures class, capable of calculating word frequency, identifying stop words, and performing other key text analysis tasks using Java collections like array lists, hash maps, and hash sets.",
    },
    "sneakerhead": {
        title: "👟 Sneakerhead Application",
        date: "10/2023",
        description: "Developed a web application for visualizing and managing sneaker collections as a final project for my Software Design Methods class. The app includes features for stock management and sales tracking. Future plans include redesigning the app as a social platform for sneaker enthusiasts, akin to an Instagram clone focused on sneaker posts.",
    }
};


// Expand Project (Open Modal)
function expandProject(projectId) {
    const modal = document.getElementById("project-modal");
    const modalDate = document.getElementById("modal-date");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    if (projectData[projectId]) {
        modalTitle.innerHTML = projectData[projectId].title;
        modalDate.innerHTML = projectData[projectId].date;
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
