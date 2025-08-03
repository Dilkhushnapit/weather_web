    const apiKey="e361158f8bcb4c437bac90e6323ac196";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const weatherIcon=document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status==404)
{
    document.querySelector(".error").style.display="block";
}


else
{
    var data = await response. json();
console. log(data);


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".tem").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
document.querySelector(".surrouding").innerHTML=data.weather[0].description;
document.querySelector(".pressure").innerHTML=data.main.pressure+" hPa";
document.querySelector(".feellike").innerHTML=data.main.feels_like+"°C";
document.querySelector(".max_tem").innerHTML=data.main.temp_max+"°C";
document.querySelector(".min_tem").innerHTML=data.main.temp_min+"°C";
document.querySelector(".latitude").innerHTML=data.coord.lat+"° N";
document.querySelector(".longitude").innerHTML=data.coord.lon+"° E";

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "clouds.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "rain.png";
}
else if(data.weather[0].main == "Drizzle"){
weatherIcon. src = "drizzle.png";
}
else if(data.weather[0].main == "Mist" ){
weatherIcon.src = "mist.png";
}

document.querySelector(".error").style.display="none";



}



}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
