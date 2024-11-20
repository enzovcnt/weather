const apiUrl = ('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6dcc83c9ec6deb27a2ac414d0af5c13d ')


function weather (){

}
fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.log(data))