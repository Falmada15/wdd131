// Selecciona el banner
const banner = document.querySelector(".banner");

// Feedback visual al hacer click
banner.addEventListener("click", () => {
    banner.style.backgroundColor = "#4a1c40";

    setTimeout(() => {
        banner.style.backgroundColor = "#702963";
    }, 500);
});