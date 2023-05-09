import React, { useContext } from "react";
import { DateContext, DateDispatch } from "./ContextCitas";

const FilterDate = () => {
  const { setFilterData } = useContext(DateDispatch);
  const { filterData } = useContext(DateContext);

  const handlerClick = (e) => {
    setFilterData({ ...filterData, month: e.target.value });
  };

  const handlerYear = (e) => {
    setFilterData({ ...filterData, year: e.target.value });
  };

  return (
    <div className="flex flex-col flex-wrap w-full items-center">
      <div className="bg-gray-300/50 shadow-xl w-1/2 rounded-3xl  mb-4">
        <h1 className="w-full text-2xl ml-6 text-gray-500 py-3 font-bold ">
          Fecha
        </h1>
      </div>
      <div className="  flex flex-col w-full items-center">
        <div className="rounded-3xl bg-gray-300/50 shadow-xl w-1/2 px-2 py-8 text-left ">
          <select onClick={handlerClick} defaultValue="mes">
            <option value="mes" disabled>
              Mes
            </option>
            <option value="">Todos</option>
            <option value="01">Enero</option>
            <option value="02">Febrero</option>
            <option value="03">Marzo</option>
            <option value="04">Abril</option>
            <option value="05">Mayo</option>
            <option value="06">Junio</option>
            <option value="07">Julio</option>
            <option value="08">Agosto</option>
            <option value="09">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
          <select className="mt-4" onClick={handlerYear} defaultValue="year">
            <option value="year" disabled>
              Año
            </option>
            <option value="">Todos</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterDate;
