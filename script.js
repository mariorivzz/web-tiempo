window.addEventListener("load", ()=> {
    if(navigator.geolocation){
        var options = {
            enagleHighAccurary: true,
            timeout: 5000,
            maximunAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            console.log("Your current position is: ");
            console.log("Latitude: " + crd.latitude.toFixed(2));
            console.log("Longitude: " + crd.longitude.toFixed(2));
            console.log("More or less " + crd.accuracy.toFixed(2) + " meters");
        };

        function error(err) {
            console.warn(`ERROR {err.code} and {err.message}`)
        };

        navigator.geolocation.getCurrentPosition(success, error, options);

        }
    }
)