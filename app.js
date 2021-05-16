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
 console.log(response.data.main.temp); 
 let temperatureElement=document.querySelector(#temperature);
 temperatureElement.innerHtml=Math.round(response.data.main.temp);
 let cityElement=document.querySelector(#city);
 cityElement.innerHtml=response.data.name;
 let description = document.querySelector(#description);
 descriptionElement.innerHtml=response.data.weather(0).description;
 let humidityElement=document.querySelector(#humidity);
 humidityElement.innerHtml=response.data.main.humidity;
 let windElement=document.querySelector(#wind);
 windElement.innerhtml=Math.round(resonse.data.wind.speed);
let dateElement=document.querySelector(#date);
dateElement.innerHtml=formatDate(response.data.dt * 1000);
}

let apiKey="1cf0147323a8da884b1f3bea8e11e7e";
let cityKey="Paris";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

axios.get(url).then(displayTemperature);