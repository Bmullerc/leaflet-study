import { useEffect, useState } from "react"

const defaultCoords = [-25.4524, -49.2512]

export default function useGetLocation() {
  const [coords, setCoords] = useState(null)

  useEffect(() => {
    function onSuccess(position) {
      setCoords([position.coords.latitude, position.coords.longitude])
    }
    function onError() {
      console.log("Error on get location")
      setCoords(defaultCoords)
    }

    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } catch (error) {
      setCoords(defaultCoords)
    }
  }, [])

  return { coords }
}