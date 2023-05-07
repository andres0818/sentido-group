import React from "react";
import ContextCitas from "./ContextCitas";
import Cards from "./Cards";
import "./spinner.css";
import Searach from "./Searach";

const Citas = () => {
  return (
    <ContextCitas>
      <Searach/>
      <Cards />
    </ContextCitas>
  );
};

export default Citas;

export function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
