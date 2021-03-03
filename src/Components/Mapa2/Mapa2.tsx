import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { position } from "../../App";

interface IProps {
  data: any;
  zoom: number;
  style: {};
}
const Mapa2: React.FC<IProps> = (props) => {
  const getColor = (province: string) => {
    console.log("Provincias en section de provincias ", province);
    switch (province) {
      case "La Habana":
        return "#800026";
      case "Matanzas":
        return "#BD0026";
      case "Cienfuegos":
        return "#E31A1C";
      case "Sancti Spiritus":
        return "#FC4E2A";
      case "Las Tunas":
        return "#FEB24C";
      case "Holguín":
        return "#800026";
      case "Granma":
        return "#b14b6a";
      case "Santiago de Cuba":
        return "#800026";
      case "Isla de la Juventud":
        return "#6e0d2a";
      case "Camagüey":
        return "#a50e3b";
      case "Ciego de Avila":
        return "#FD8D3C";
      case "Villa Clara":
        return "#800026";
      case "Guantanmo":
        return "#FC4E2A";
      case "Pinar del Río":
        return "#800026";
      case "Artemisa":
        return "#BD0026";
      case "Mayabeque":
        return "#FFEDA0";

      default:
        break;
    }
  };

  const style = (feature: any) => {
    return {
      fillColor: getColor(feature.properties.province),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  return (
    <MapContainer
      style={props.style}
      center={position}
      zoom={props.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFuZHk5OTQzIiwiYSI6ImNrbDhlY2w0YTF3NDgyb3A2ZXVlZXBhOXQifQ.yNUL95AQe3UD-ULZo3SydQ"
        id="mapbox/light-v9"
        tileSize={512}
        zoomOffset={-1}
      />
      <GeoJSON data={props.data} style={style}></GeoJSON>
    </MapContainer>
  );
};

export default Mapa2;
