import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ temples = [], spiritualPlaces = [] }) => {
  // Center on Vrindavan area
  const center = [27.5781, 77.6984];

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <MapContainer 
        center={center} 
        zoom={12} 
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Temple Markers */}
        {temples.filter(t => t.coordinates).map((temple) => (
          <Marker 
            key={temple._id}
            position={[temple.coordinates.lat, temple.coordinates.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-base mb-1">{temple.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{temple.location}</p>
                <Link 
                  to={`/temples/${temple._id}`}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  View Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Spiritual Place Markers */}
        {spiritualPlaces.filter(p => p.coordinates).map((place) => (
          <Marker 
            key={place._id}
            position={[place.coordinates.lat, place.coordinates.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-base mb-1">{place.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{place.location}</p>
                <p className="text-xs text-gray-500 mb-2">{place.type}</p>
                <Link 
                  to={`/spiritual-places/${place._id}`}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;