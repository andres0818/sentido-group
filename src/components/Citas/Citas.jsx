import React, { useContext } from "react";
import ContextCitas, { DateContext } from "./ContextCitas";
import Cards from "./Cards";

const Citas = () => {
  return (
    <ContextCitas>
      <Cards />
    </ContextCitas>
  );
};

export default Citas;
