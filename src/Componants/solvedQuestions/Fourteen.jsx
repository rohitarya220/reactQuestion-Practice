import React, { useEffect, useState } from 'react'

const Fourteen = () => {
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d2321940b5e484e1aa0be241c1e58fc9`)
              .then((res)=> res.json())
              .then((data)=> setWeather(data))
      })
    }
  },[])

  return (
    <div>
      {weather ? (
        <div>
          <h2>current Weather</h2>
          <p>current tempreture: {weather.main.temp}</p>
          <p>condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )
      }
    </div>
  )
}

export default Fourteen