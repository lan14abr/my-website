import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/assets/css/leaflet.css";
import "./MapPage.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const SearchField = ({ setMarkerPosition }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoComplete: true,
      autoCompleteDelay: 250,
      onResult: (result) => {
        const { latitude, longitude } = result.location;
        setMarkerPosition([latitude, longitude]);
        map.setView([latitude, longitude], 13);
      },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, [map, setMarkerPosition]);

  return null;
};

const defaultIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Marker.svg", // Standard Leaflet-ikon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  return (
    <MapContainer
      center={[55.605, 13.0038]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <div className="searchFieldContainer">
        <SearchField setMarkerPosition={setMarkerPosition} />
        {markerPosition && (
          <Marker position={markerPosition} icon={defaultIcon} />
        )}
      </div>
    </MapContainer>
  );
};

export default MapComponent;
