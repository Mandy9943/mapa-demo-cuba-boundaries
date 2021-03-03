import React from "react";
import "leaflet/dist/leaflet.css";
import { municipio } from "./geojson_by_region_division/by_municipalities/cuba_muni";
import { cubaProvince } from "./geojson_by_region_division/by_provinces/cuba";
import "./App.css";
import { LatLngTuple } from "leaflet";
import Mapa1 from "./Components/Mapa1/Mapa1";
import Mapa2 from "./Components/Mapa2/Mapa2";
import Switcher from "./Components/Switcher/Switcher";
export const position: LatLngTuple = [21.464245474907123, -79.56300001110692];

interface IState {
  municipios: typeof municipio;
  provincias: typeof cubaProvince;
  zoom: number;
  style: {};
  showMapa1: boolean;
  showMapa2: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    municipios: municipio,
    provincias: cubaProvince,
    zoom: 6,
    style: {
      width: "100%",
      height: "100vh",
    },
    showMapa1: true,
    showMapa2: false,
  };

  handleMapChange = () => {
    this.setState({
      showMapa1: !this.state.showMapa1,
      showMapa2: !this.state.showMapa2,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ position: "relative" }}>
          {this.state.showMapa1 && (
            <Mapa1
              data={this.state.municipios}
              zoom={this.state.zoom}
              style={this.state.style}
            />
          )}
          {this.state.showMapa2 && (
            <Mapa2
              data={this.state.provincias}
              zoom={this.state.zoom}
              style={this.state.style}
            />
          )}
          <Switcher clicked={this.handleMapChange} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
