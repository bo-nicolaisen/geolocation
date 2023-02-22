

const myApp = document.getElementById('app');


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    const crd = pos.coords;

    let myText = `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`;

    myApp.innerText = myText;

    getLocationName(crd.longitude, crd.latitude);

}

function error(err) {
    myApp.innerText = `ERROR(${err.code}): ${err.message}`;
}


//myApp.innerText = 'test';
navigator.geolocation.getCurrentPosition(success, error, options);

function getLocationName(myLong, myLat) {
    const myApiKey = '3e88f8919e892cfdc1b365a34e48b092';

    const apiUrl = `http://api.positionstack.com/v1/reverse?access_key=${myApiKey}&query=${myLat},${myLong}`;

}

