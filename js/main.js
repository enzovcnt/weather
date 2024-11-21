const lat = document.querySelector('.latitude');
const long = document.querySelector('.longitude');
const button = document.querySelector('.bouton');
const names = document.querySelector('.name');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.température');
const humidity = document.querySelector('.humid');
const country = document.querySelector('.country');
const apiUrl = (`https://api.openweathermap.org/data/2.5/weather?lat=45.75&lon=4.850&units=metric&appid=6dcc83c9ec6deb27a2ac414d0af5c13d`);




function getWeather() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            names.innerHTML ='Ville :' + data.name;
            country.innerHTML ='Pays :' + data.sys.country;
            weather.innerHTML ='Condition :' + data.weather[0].main;
            temp.innerHTML ='Température :' + data.main.temp + '°C';
            humidity.innerHTML ='Humidité :' + data.main.humidity + '%';
        })
        .catch(err => console.log(err));

}


button.addEventListener('click', getWeather);


// étape 1 = plus d'information = finish
// étape 2 = pouvoir avoir URL dynamique
// étape 3 = entrer long et lat et clicker pour que HTML change
// étape 4 = ajouter images + animation qui vont avec la météo de maintenant

//${lat}
//${long}
// function coord(){
//     lat.inputs = '';
//     long.inputs = '';
// }