console.log("Nexora Builders website loaded successfully.");


/* =========================
   HERO 3D MOUSE EFFECT
========================= */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

if (hero && heroContent) {

    hero.addEventListener("mousemove", function (event) {

        const rect = hero.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((mouseX - centerX) / centerX) * 5;
        const rotateX = ((mouseY - centerY) / centerY) * -5;

        heroContent.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    hero.addEventListener("mouseleave", function () {

        heroContent.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

}


/* =========================
   PROJECT FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameElement = document.getElementById("name");
        const emailElement = document.getElementById("email");
        const projectElement = document.getElementById("project");
        const messageElement = document.getElementById("message");

        const name = nameElement ? nameElement.value.trim() : "";
        const email = emailElement ? emailElement.value.trim() : "";
        const project = projectElement ? projectElement.value : "";
        const message = messageElement ? messageElement.value.trim() : "";

        if (!name || !email || !project || !message) {

            formMessage.textContent =
                "Please complete all required fields.";

            formMessage.style.color = "#d66";

            return;
        }

        formMessage.textContent =
            "Thank you! Your project inquiry has been received.";

        formMessage.style.color = "#B58B5A";

        contactForm.reset();

    });

}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section, .stat-card, .service-card, .project-card, .about-content, .contact-wrapper"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("active");
    });

}


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.querySelector(".page-loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hidden");

        }, 700);

    }

});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    /* Close mobile menu when a link is clicked */

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href").split("/").pop();

    link.classList.remove("active");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


/* Project Details belongs to Projects */

if (currentPage === "project-details.html") {

    allNavLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === "projects.html") {

            link.classList.add("active");

        }

    });

}