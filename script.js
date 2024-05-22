const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const apiKey = '162c8f7dfe0247dd535f7dabcebb147c';

// Use the apiKey in your script
console.log(apiKey);

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value;
    getWeather(city);
});

const weatherDescriptions = {
  'Clear': 'Despejado',
  'Clouds': 'Nublado',
  'Rain': 'Lluvia',
  // Agrega más descripciones según sea necesario
};

function getWeatherDescription(weatherCode) {
  return weatherDescriptions[weatherCode] || weatherCode;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          const weather = getWeatherDescription(data.weather[0].main);
          const temperature = kelvinToCelsius(data.main.temp).toFixed(1);
          const cityName = data.name;
          weatherInfo.innerHTML = `Tiempo en ${cityName}: ${weather}, Temperatura: ${temperature}°C`;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
      });
}


/* if (navigator.geolocation) {
    // Definir la función asíncrona para recoger el dato y hacer la llamada a la API
    async function recogerDato() {
      try {
        // Obtener el valor del input
        var dato = document.getElementById('miDato').value;
        
        // Esperar la posición del usuario
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        // Extraer latitud y longitud
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
  
        // Construir la URL con la clave API y el dato recogido
        const apiKey = "162c8f7dfe0247dd535f7dabcebb147c"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${dato}&appid=${apiKey}`
  
        // Hacer la solicitud fetch a la API
        const respuesta = await fetch(url);
        const datosClima = await respuesta.json();
  
        // Usar los datos del clima como necesites
        console.log(datosClima);
      } catch (error) {
        // Manejar errores, si los hay
        console.error('Error al obtener los datos:', error);
      }
    }
  
    // Llamar a la función cuando sea necesario, por ejemplo, en un evento de clic
    document.getElementById('botonEnviar').addEventListener('click', recogerDato);
  }
   */



