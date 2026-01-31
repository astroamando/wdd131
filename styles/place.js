document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const temp = Number(document.querySelector("#temp").textContent); // °F (or °C)
const windSpeed = Number(document.querySelector("#wind").textContent); // mph (or km/h)

function calculateWindChill(t, v) {
  return 35.74 + 0.6215 * t - 35.75 * (v ** 0.16) + 0.4275 * t * (v ** 0.16);
}

let windChillText = "N/A";
if (temp <= 50 && windSpeed > 3) {
  const chill = calculateWindChill(temp, windSpeed);
  windChillText = `${Math.round(chill)}°F`;
}

document.querySelector("#windchill").textContent = windChillText;