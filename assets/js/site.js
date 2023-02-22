

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


    let myResElement = document.createElement('h2');


    fetch(apiUrl, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Body: body,
        Cache: 'default'
    })
        .then((response) => response.json())

        .then((data) => {
            console.log('Success:', data);
            myResElement.innerText = `my data: ${data}`;
        })
        .catch((error) => {
            console.error('Error:', error);
            myResElement.innerText = `my error: ${error}`;
        });

    myApp?.appendChild(myResElement);

}



