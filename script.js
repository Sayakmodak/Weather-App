// let apiKey = "5bc36cd7f7ac03910a1aa186f472107e" ;
let input = document.getElementById("input");
let button = document.getElementById("search-btn");
let temp = document.getElementById("temp");
let nameOfCity = document.getElementById("nameOfCity");
let humidity = document.getElementById("humidity");
let windspeed = document.getElementById("speedOfWind");
let weatherIcon = document.getElementById("weather-icon");

async function checkWeather(cityName){
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5bc36cd7f7ac03910a1aa186f472107e&units=metric`;

    let response = await fetch (URL);
    let data = await response.json();
    console.log(data);
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "snow.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "clear.png";
    }
    humidity.innerText = data.main.humidity + "%";
    windspeed.innerText = data.wind.speed + "km/h";
    temp.innerText =Math.round(data.main.temp) +  "\u00B0C";
    nameOfCity.innerText = data.name;
}
button.addEventListener("click",function (){
    let value = input.value;
    
    checkWeather(value.toLowerCase());
})
