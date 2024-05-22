window.addEventListener("load", ()=> {
    if(navigator.geolocation){

        let lon, lat

        const apiKey = "162c8f7dfe0247dd535f7dabcebb147c"

        navigator.geolocation.getCurrentPosition( position => {
            lon = position.coords.longitude
            lat = position.coords.latitude

            
            /* const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}` */

            const url = `https://api.openweathermap.org/data/2.5/weather?q=Salamanca&appid=${apiKey}`

            /* const url = `https://api.openweathermap.org/data/2.5/weather?q={Salamanca},{es}&appid=${apiKey}` */


            console.log(url);

        })

        }
    }
)



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



