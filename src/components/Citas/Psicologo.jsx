import React from "react";
import { profesionales } from "../../profesionales";

const Psicologo = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center">
      <div className="bg-gray-300/50 shadow-xl w-1/2 rounded-3xl  mb-4">
        <h1 className="w-full text-2xl ml-6 text-gray-500 py-3 font-bold ">
          Psicólogo
        </h1>
      </div>
      <div className="  flex flex-col w-full items-center">
        <div className="rounded-3xl bg-gray-300/50 shadow-xl w-1/2 px-2 py-8 text-left ">
          <h1 className="ml-6 text-2xl text-gray-500 font-bold">
            {profesionales.johana}
          </h1>
          <h1 className="ml-6 text-2xl text-gray-500 font-bold">
            {profesionales.camilo}
          </h1>
          <h1 className="ml-6 text-2xl text-gray-500 font-bold">
            {profesionales.andrea}
          </h1>
          <h1 className="ml-6 text-2xl text-gray-500 font-bold">
            {profesionales.cristina}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Psicologo;
