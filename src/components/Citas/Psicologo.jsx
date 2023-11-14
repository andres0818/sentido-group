import React, { useContext } from "react";
import { profesionales } from "../../profesionales";
import { DateDispatch } from "./ContextCitas";

const Psicologo = () => {
  const { setIsPsicolog } = useContext(DateDispatch);

  const onChange = (e) => {
    setIsPsicolog(e);
  };

  const allData = () => {
  setIsPsicolog('')
  };

  return (
    <div className="flex flex-col flex-wrap w-full items-center">
      <div className="bg-gray-300/50 shadow-xl w-1/2 rounded-3xl  mb-4">
        <h1 className="w-full text-2xl ml-6 text-gray-500 py-3 font-bold ">
          Psicólogo
        </h1>
      </div>
      <div className="  flex flex-col w-full items-center">
        <div className="rounded-3xl bg-gray-300/50 shadow-xl w-1/2 px-2 py-8 text-left ">
          <h1
            onClick={allData}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            Todos
          </h1>
          <h1
            onClick={() => onChange(profesionales.johana)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.johana}
          </h1>
          <h1
            onClick={() => onChange(profesionales.camilo)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.camilo}
          </h1>
          <h1
            onClick={() => onChange(profesionales.andrea)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.andrea}
          </h1>
          <h1
            onClick={() => onChange(profesionales.cristina)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.cristina}
          </h1>
          <h1
            onClick={() => onChange(profesionales.Zuly)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.Zuly}
          </h1>
          <h1
            onClick={() => onChange(profesionales.subArriendo)}
            className="ml-6 text-2xl cursor-pointer text-gray-500 font-bold"
          >
            {profesionales.subArriendo}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Psicologo;
