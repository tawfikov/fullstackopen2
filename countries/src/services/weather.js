import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_WEATHER_KEY
console.log("API KEY:", apiKey)

const getWeather = (lat, long) => {
    const request = axios.get(`${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
    return request.then(response => response.data)
}

export default { getWeather }