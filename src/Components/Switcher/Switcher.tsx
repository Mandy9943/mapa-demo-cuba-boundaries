import React from "react";
import "./Switcher.css";
interface IProps {
  clicked: () => void;
}
const Switcher: React.FC<IProps> = (props) => {
  return (
    <div className="Switch">
      <button onClick={props.clicked}>Cambiar de mapa</button>
    </div>
  );
};

export default Switcher;
