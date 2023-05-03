import React from "react";
import CardConsultorio from "./CardConsultorio";

const Consultorios = () => {
  const consultorios = [
    { id: "1", nombre: "Coordinación" },
    { id: "2", nombre: "Virtual" },
    { id: "3", nombre: "Infantil" },
    { id: "4", nombre: "Dir. Operativo" },
    { id: "5", nombre: "Dir. Administrativo" },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="text-6xl font-bold text-green-600">Consultorios</h1>
      <div className="w-full px-20 py-12 flex flex-wrap gap-10 justify-center items-center">
        {consultorios.map((consultorio) => (
          <CardConsultorio key={consultorio.id} consultorio={consultorio} />
        ))}
      </div>
    </div>
  );
};

export default Consultorios;
