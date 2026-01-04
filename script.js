const apiKey = "10fb874a91eac0f43448433ac48e2cbb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox");
const weatherIcon = document.querySelector(".weatherIcon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").innerText = "Invalid City Name";
        document.querySelector(".weather").style.display="none";

    }
    else{
    document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
document.querySelector(".humid").innerHTML = data.main.humidity+"%";
 document.querySelector(".windSpeed").innerHTML = data.wind.speed+"km/h";
 if(data.weather[0].main === "Clouds")
   weatherIcon.src = "images/clouds.png";
 else  if(data.weather[0].main === "Clear")
   weatherIcon.src = "images/clear.png";
 else  if(data.weather[0].main === "Rain")
   weatherIcon.src = "images/rain.png";
 else  if(data.weather[0].main === "Drizzle")
   weatherIcon.src = "images/drizzle.png";
 document.querySelector(".weather").style.display="block";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
