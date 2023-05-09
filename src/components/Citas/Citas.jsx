import React from "react";
import ContextCitas from "./ContextCitas";
import Cards from "./Cards";
import Searach from "./Searach";
import Psicologo from "./Psicologo";
import "./spinner.css";
import FilterDate from "./FilterDate";

const Citas = () => {
  return (
    <ContextCitas>
      <div className="w-full flex flex-wrap h-full">
        <div className="w-1/4 flex flex-col justify-center py-12">
          <Psicologo />
          <div className="mt-12"/>
          <FilterDate />
        </div>
        <div className="w-3/4">
          <Searach />
          <Cards />
        </div>
      </div>
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
