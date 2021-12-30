let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  
  const weather = fetch(FULL_URL)
  //CODE GOES HERE
  const returnWeather = weather.then((response)=>{
    return response.json();
    })/**.then((weatherData)=>{
      console.log(weatherData);

  })
  .catch((error)=>{
  })*/

  return returnWeather;
} 


searchCity = () => {
  const city = document.getElementById('city-input').value;
  
 getWeatherData(city).then((response)=>{
  
  showWeatherData(response); 
})
.catch((error)=>{
})
  
}

showWeatherData = (weatherData) => {
  //CODE GOES HERE 
  console.log("this is the showWeatherData function",weatherData);
  document.getElementById('min-temp').innerText =  weatherData.main.temp_min;
  document.getElementById('max-temp').innerText =  weatherData.main.temp_max;
  document.getElementById('city-name').innerText =  weatherData.name;
  document.getElementById('temp').innerText =  weatherData.main.temp;
  document.getElementById('weather-type').innerText =  weatherData.weather[0].main;
}

