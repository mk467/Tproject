import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer 
      center={[34.020882, -6.841650]} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[34.020882, -6.841650]}>
        <Popup>Example location</Popup>
      </Marker>
    </MapContainer>
  );
}
