const lat = document.querySelector('.latitude');
const long = document.querySelector('.longitude');
const button = document.querySelector('.bouton');
const names = document.querySelector('.name');
const weather = document.querySelector('.weather');
const apiUrl = (`https://api.openweathermap.org/data/2.5/weather?lat=45.133&lon=7.367&appid=6dcc83c9ec6deb27a2ac414d0af5c13d`);



function getWeather() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            names.innerHTML = data.name;
        })
        .catch(err => console.log(err));
}

getWeather();

button.addEventListener('click', getWeather);

// étape 1 = pouvoir avoir URL dynamique
// étape 2 = entrer long et lat et clicker pour que HTML change
// étape 3 = plus d'information
