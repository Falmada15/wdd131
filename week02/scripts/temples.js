// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        menuBtn.textContent = "☰";
    } else {
        navMenu.style.display = "flex";
        menuBtn.textContent = "✖";
    }
});

// Filters + active state
const figures = document.querySelectorAll("figure");
const links = document.querySelectorAll("nav a");

function setActive(clickedLink) {
    links.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");
}

document.getElementById("home").addEventListener("click", (e) => {
    setActive(e.target);
    figures.forEach(fig => fig.style.display = "block");
});

document.getElementById("old").addEventListener("click", (e) => {
    setActive(e.target);
    figures.forEach(fig => {
        fig.style.display = fig.dataset.year === "old" ? "block" : "none";
    });
});

document.getElementById("new").addEventListener("click", (e) => {
    setActive(e.target);
    figures.forEach(fig => {
        fig.style.display = fig.dataset.year === "new" ? "block" : "none";
    });
});

document.getElementById("large").addEventListener("click", (e) => {
    setActive(e.target);
    figures.forEach(fig => {
        fig.style.display = fig.dataset.size === "large" ? "block" : "none";
    });
});

document.getElementById("small").addEventListener("click", (e) => {
    setActive(e.target);
    figures.forEach(fig => {
        fig.style.display = fig.dataset.size === "small" ? "block" : "none";
    });
});