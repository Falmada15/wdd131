const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

const temp = 10;
const wind = 5;

let result = "N/A";

if (temp <= 10 && wind > 4.8) {
    result = `${calculateWindChill(temp, wind)} °C`;
}

document.querySelector("#windchill").textContent = result;