
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* ---------- ELEMENT SELECTORS ---------- */
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero");
const featureCards = document.querySelectorAll(".feature-card");

/* ---------- INITIAL STATES ---------- */

/* Navbar hidden initially */
navbar.style.opacity = "0";
navbar.style.transform = "translateY(-25px)";

/* Feature cards hidden initially */
featureCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
});

/* ---------- PAGE LOAD ANIMATIONS ---------- */
window.addEventListener("load", () => {

    /* Navbar reveal */
    setTimeout(() => {
        navbar.style.transition = "0.8s ease";
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";
    }, 600);

    /* Feature cards animation */
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = "0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 1000 + index * 300);
    });

});

/* ---------- BACKGROUND SLIDER ---------- */
const backgrounds = [
    "img/bg-admin.jpg"
    "img/bg-campus.jpg",
    "img/bg-students.jpg",
    
];

let currentBgIndex = 0;

setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;

    heroSection.style.transition = "background-image 1.5s ease-in-out";
    heroSection.style.backgroundImage =
        `url(${backgrounds[currentBgIndex]})`;

}, 6000);

/* ---------- SCROLLING ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* -------- CURSOR INTERACTION ---------- */
document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.6)";
        cursor.style.boxShadow =
            "0 0 20px #ff2fd1, 0 0 40px rgba(255,47,209,0.8)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.boxShadow =
            "0 0 10px #00f6ff, 0 0 25px rgba(0,246,255,0.6)";
    });
});

