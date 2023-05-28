const API_KEY ='a11efdf20828e1f087d7005a9201e80d';
const API_BASE_URL='https://api.openweathermap.org/data/2.5/weather';

const locationInput= document.getElementById('locationInput');
const getWeatherButton= document.getElementById('getWeatherButton');
const weatherContainer= document.getElementById('weatherContainer');

getWeatherButton.addEventListener ('click', () => {

    const location= locationInput.value.trim();
    if (location) { 
       const apiUrl= `${API_BASE_URL}?q=${location}&appid=${API_KEY}`; 
       fetch(apiUrl)
       .then (res0>resizeBy.json())
       .then (data => console.log(data))
    }

})