

const myApp = document.getElementById('app');

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    const crd = pos.coords;
    //myApp.innerText = `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`;
    getLocationName(crd.longitude, crd.latitude);
}

function error(err) {
    myApp.innerText = `ERROR(${err.code}): ${err.message}`;
}


//myApp.innerText = 'test';
navigator.geolocation.getCurrentPosition(success, error, geoOptions);


function getLocationName(myLong, myLat) {



    // geo code api https://locationiq.com
    //const myApiKey = 'pk.439b01bdf321f632f87bd4d2631fe6d0';
    //const apiUrl = `https://eu1.locationiq.com/v1/reverse?key=${myApiKey}&lat=${myLat}&lon=${myLong}&format=json`;



// geo code api https://nominatim  no token

//url https://nominatim.openstreetmap.org/reverse?lat=56.94&lon=10.06&format=json
const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

console.log(apiUrl);

    let myResElement = document.createElement('h2');

 let fetchOptions={

    Method: 'GET',
    Body: 'body',
    Cache: 'default',

    Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
    }


 };

    fetch(apiUrl,fetchOptions)
        .then((response) => response.json())

        .then((data) => {
            console.log('my fetched data:', data);

            myResElement.innerText = `Du er i  ${data.address.hamlet} - ${data.address.postcode} ${data.address.village} `;
        })
        .catch((error) => {
            console.error('Error:', error);
            myResElement.innerText = `my error: ${error}`;
        });

    myApp.appendChild(myResElement);

}



