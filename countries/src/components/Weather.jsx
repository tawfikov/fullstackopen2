import { useState, useEffect } from 'react'
import weatherService from '../services/weather.js'


const Weather = ({ country }) => {
    const lat = country.capitalInfo.latlng[0]
    const long = country.capitalInfo.latlng[1]

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
        .getWeather(lat, long)
        .then(data => {
            console.log(data)
            setWeather(data)
        })
    }, [lat, long])
    if (!weather) {
        return null
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>temperature: {weather.main.temp} °C</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <p>Wind: {weather.wind.speed}</p>
        </div>
    )
}

export default Weather