// Custom javascript code
console.log('CUSTOM JS LOADED');

var Geolocate = {
    
    initialize: function(){
        this.findLocation()
    },

    findLocation: function(){

        navigator.geolocation.watchPosition(geolocationSuccess, geolocationError,
        []);
        
        function geolocationSuccess(position){
            console.log(position);

            var crd = position.coords;

            document.getElementById('latitude').innerHTML = crd.latitude;
            document.getElementById('longitude').innerHTML = crd.longitude;

        }
        function geolocationError(err){
            console.log(err);
        }
    }
}




var Accelerate = {
    

    initialize: function(){
        this.max_g = 0;
        this.findAcceleration();
    },



    findAcceleration: function(){

        navigator.accelerometer.watchAcceleration(
            this.onSuccess,
            this.onError,
            {
                frequency: 500,
            }
        );

    },


    onSuccess: function(acceleration){

/*
        console.log('Acceleration X: ' + acceleration.x + '\n' +
            'Acceleration Y: ' + acceleration.y + '\n' +
            'Acceleration Z: ' + acceleration.z + '\n' +
            'Timestamp: '      + acceleration.timestamp + '\n');
*/

        var g = Math.sqrt(acceleration.x * acceleration.x + acceleration.y * acceleration.y + acceleration.z * acceleration.z);

        document.getElementById('current_acceleration').innerHTML = Math.round(g * 100) /100;

        if (g > Accelerate.max_g){
            Accelerate.max_g = g;
            document.getElementById('max_acceleration').innerHTML = Math.round(g * 100) /100;;
        }


        // var acc_x = document.getElementById('acc_x');
        // acc_x.innerHTML = Math.round(acceleration.x * 100)/100;
        // var acc_y = document.getElementById('acc_y');
        // acc_y.innerHTML = Math.round(acceleration.y * 100)/100;
        // var acc_z = document.getElementById('acc_z');
        // acc_z.innerHTML = Math.round(acceleration.z * 100)/100;

    },

    onError: function(err){

        console.log(err);
    }

}
