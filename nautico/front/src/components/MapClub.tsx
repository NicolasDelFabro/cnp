"use client";

import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { IoPin } from "react-icons/io5";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const icon = L.divIcon({
  html: renderToStaticMarkup(
    <IoPin
      size={40}
      color="red"
    />
  ),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -30],
});

const MapClub = () => {
  const position: [number, number] = [-33.903754, -60.575980];

  return (
    <MapContainer
      center={position}
      zoom={17}
      className="w-full h-full rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={position} icon={icon}>
        <Popup>
          Club Náutico Pergamino
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapClub;