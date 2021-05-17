function formatDate(timestamp) {
let date= new Date(timestamp);
let hours= date.getHours();
if (hours < 10) {
    hours=`0${hours}`;
}
let minutes= date.getminutes();
if (minutes < 10) {
    minutes=`0${minutes}`;
}
let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[date.getDay()];
    return `${day} ${hours}:${minutes}`;

}


function displayTemperature(response) {
 
 let temperatureElement=document.querySelector(#temperature);
 // remove active class from the celsius link
 celsiusLink.classList.remove("active");
 farenheitLink.classList.add("active");
 temperatureElement.innerHTML=Math.round(response.data.main.temp);

 let cityElement=document.querySelector(#city);
 cityElement.innerHTML=response.data.name;

 let description = document.querySelector(#description);
 descriptionElement.innerHTML =response.data.weather(0).description;

 let humidityElement=document.querySelector(#humidity);
 humidityElement.innerHTML=response.data.main.humidity;

 let windElement=document.querySelector(#wind);
 windElement.innerHTML=Math.round(resonse.data.wind.speed);

let dateElement=document.querySelector(#date);
dateElement.innerHTML=formatDate(response.data.date * 1000);

let iconElement=document.querySelector("#icon");
iconElement.setAttribute( "src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey="1cf0147323a8da884b1f3bea8e11e7e";
let cityKey="New York";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

axios.get(url).then(displayTemperature);

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement= document.querySelector("city-input");
    search (cityInputElement.value);
}
function displayFarenheitTemperature(event) {
    event.preventDefault();
    let farenheitTemperature= (temperatureElement.innerHTML * 9) / 5 +32;
    alert(farenheitTemperature);
    let temperatureElement= document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(farenheitTemperature);
}
function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    farenheitLink.classList.remove("active");
    let temperatureElement= document.querySelector("temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature):
}

search("New York");
let celsiusTemperature=null;

let form= document.querySelector(#search-form");
form.addEventListener("submit", handleSubmit );

let farenheitLink= document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);

