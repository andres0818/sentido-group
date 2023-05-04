import React from "react";

const Citas = () => {
  return (
    <div className="px-12">
      <h1 className="text-center text-6xl font-bold text-green-600">
        Ingreso Pacientes
      </h1>
      <form>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Informacion Personal
        </h2>
        <div className="flex flex-row justify-between">
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Identificación"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Edad"
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Email"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Dirección"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Fecha de Nacimiento"
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Celular"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Fecha de Ingreso"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Contacto de Emergencia"
          />
        </div>

        <h1 className="text-2xl font-bold text-green-600 mt-16 mb-4">
          Datos del Profesional
        </h1>
        <div className="flex flex-row ">
          <input
            className="shadow-xl bg-gray-100 w-1/3  rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Valor Consulta"
          />
          <input
            className="shadow-xl bg-gray-100 w-1/3  rounded-md text-2xl m-4 px-4 py-3"
            type="text"
            placeholder="Profesional"
          />
          <input className="w-1/3 m-4 px-4 py-3" disabled />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-green-600 mt-4 px-8  py-3 rounded-3xl text-4xl font-bold text-white flex justify-center items-center">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Citas;
