document.addEventListener('DOMContentLoaded', function() {
  const temperature = 10; // Temperatura em °C
  const windSpeed = 5; // Velocidade do vento em km/h

  function calculateWindChill(temp, wind) {
      // Fórmula de sensação térmica em °C
      return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
  }

  function displayWindChill() {
      let windChillElement = document.getElementById('wind-chill');
      if (temperature <= 10 && windSpeed > 4.8) {
          let windChill = calculateWindChill(temperature, windSpeed);
          windChillElement.textContent = `${windChill} °C`;
      } else {
          windChillElement.textContent = "N/A";
      }
  }

  displayWindChill();
});
