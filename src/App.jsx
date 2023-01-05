import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import useGetLocation from "./hooks/useGetLocation"

function App() {
  const { coords } = useGetLocation()

  if (!coords) {
    return <h1>Getting location...</h1>
  }

  return (
    <MapContainer className='h-screen' center={[coords[0], coords[1]]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-25.4524, -49.2512]}>
        <Popup>
          PUC-PR
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
