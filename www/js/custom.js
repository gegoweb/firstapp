// Custom javascript code
console.log('CUSTOM JS LOADED');

var Geolocate = {
    
    initialize: function(){
        this.findLocation()
    },

    findLocation: function(){

        // navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
        //
        // function geolocationSuccess(position){
        //     console.log(position);
        // }
        // function geolocationError(err){
        //     console.log(err);
        // }
    }
}




var Accelerate = {

    initialize: function(){
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

        console.log('Acceleration X: ' + acceleration.x + '\n' +
            'Acceleration Y: ' + acceleration.y + '\n' +
            'Acceleration Z: ' + acceleration.z + '\n' +
            'Timestamp: '      + acceleration.timestamp + '\n');

        var acc_x = document.getElementById('acc_x');
        acc_x.innerHTML = acceleration.x;
        var acc_y = document.getElementById('acc_y');
        acc_y.innerHTML = acceleration.y;
        var acc_z = document.getElementById('acc_z');
        acc_z.innerHTML = acceleration.z;

    },

    onError: function(err){

        console.log(err);
    }

}
