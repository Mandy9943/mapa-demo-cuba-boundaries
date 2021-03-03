import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { position } from "../../App";

interface IProps {
  data: any;
  zoom: number;
  style: {};
}
const Mapa1: React.FC<IProps> = (props) => {
  const getColor = (province: string) => {
    console.log("Provincias en section de municipios ", province);

    switch (province) {
      case "La Habana":
        return "#1bac4b";
      case "Matanzas":
        return "#774d55";
      case "Cienfuegos":
        return "#cfe31a";
      case "Sancti Spíritus":
        return "#2afc69";
      case "Las Tunas":
        return "#724c19";
      case "Holguín":
        return "#800026";
      case "Granma":
        return "#3d282e";
      case "Santiago de Cuba":
        return "#00805a";
      case "Isla de la Juventud":
        return "#6e0d69";
      case "Camagüey":
        return "#9b9899";
      case "Ciego de Ávila":
        return "#a55c28";
      case "Villa Clara":
        return "#aa3558";
      case "Guantánamo":
        return "#001f86";
      case "Pinar del Río":
        return "#5e2c3b";
      case "Artemisa":
        return "#BD0026";
      case "Mayabeque":
        return "#a39763";

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

export default Mapa1;
