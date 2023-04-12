import React, { useState } from 'react'
// import useGeolocation from "react-hook-geolocation"


function Location() {
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [error, setError] = useState('')

  const geolocationAPI = navigator.geolocation

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  }

  getUserCoordinates()

  return (
    <div>
      <p>Your coordinates are: {[lat, long]}</p>
      {error}
    </div>
  )
}

export default Location