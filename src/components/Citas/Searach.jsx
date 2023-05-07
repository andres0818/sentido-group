import React, { useContext } from "react";
import { DateDispatch } from "./ContextCitas";

const Searach = () => {
  const { setIsSearch } = useContext(DateDispatch);
  const handlerSearch = (e) => {
    setIsSearch(e.target.value);
  };
  return (
    <div className="w-full flex justify-center ">
      <input
        onChange={(e) => handlerSearch(e)}
        className="shadow-xl bg-gray-200 w-1/3 rounded-md text-2xl m-4 px-4 py-3"
        type="text"
        placeholder="Ingrese una identificacion"
      />
    </div>
  );
};

export default Searach;
