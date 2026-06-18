document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;

// Favorite Messi moments array
const legendaryMoments = [
    "World Cup 2022",
    "Copa América 2021",
    "91 Goals in 2012",
    "Champions League 2009"
];

// Fan Wall functionality
const fanForm = document.querySelector("#fanForm");
const fanMessages = document.querySelector("#fanMessages");

function displayMessages() {

    if (!fanMessages) return;

    const messages =
        JSON.parse(localStorage.getItem("messiFanMessages")) || [];

    fanMessages.innerHTML = "";

    messages.forEach((fan) => {

        fanMessages.innerHTML += `
            <div class="fan-card">
                <h3>${fan.name} - ${fan.country}</h3>
                <p><strong>Favorite Moment:</strong> ${fan.moment}</p>
                <p>${fan.message}</p>
            </div>
        `;
    });
}

if (fanForm) {

    fanForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.querySelector("#fanName").value;

        const country =
            document.querySelector("#country").value;

        const moment =
            document.querySelector("#moment").value;

        const message =
            document.querySelector("#message").value;

        // Conditional branching
        if (message.length < 10) {

            alert("Please write a longer message.");

            return;
        }

        // Object
        const fanEntry = {
            name,
            country,
            moment,
            message
        };

        // localStorage
        const messages =
            JSON.parse(localStorage.getItem("messiFanMessages")) || [];

        messages.push(fanEntry);

        localStorage.setItem(
            "messiFanMessages",
            JSON.stringify(messages)
        );

        fanForm.reset();

        displayMessages();
    });
}

displayMessages();