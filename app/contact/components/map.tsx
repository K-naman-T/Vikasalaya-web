'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { locations } from './data'

// leaflet markers (copied from leaflet's dist folder)
const icon = L.icon({
  iconUrl: "/images/leaflet/marker-icon.png",
  iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
  shadowUrl: "/images/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function Map() {
  return (
    <div className="aspect-video w-full h-[500px] relative rounded-lg overflow-hidden">
      <MapContainer 
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker 
            key={location.name}
            position={location.coordinates}
            icon={icon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-primary">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
} 