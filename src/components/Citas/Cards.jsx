import React, { useContext, useState } from "react";
import { DateContext } from "./ContextCitas";
import { useNavigate } from "react-router-dom";
import "./spinner.css";

const Cards = () => {
  const { data } = useContext(DateContext);
  const navigate = useNavigate();
  const itemsPerPage = 12; // Número de elementos a mostrar por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los índices inicial y final de los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los elementos de la página actual
  const currentPageData = data?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
      <div>

    <div className="w-full flex-wrap flex">
      {currentPageData?.length > 0 ? (
        currentPageData.map((e, index) => {
          const { name, valorConsulta, profesional, userId, fecha } = e;
          return (
            <div
            key={index}
            onClick={() => navigate(`/citas/${userId}`)}
            className="bg-green-600/60 max-w-xs p-4 w-1/3 m-1 rounded-xl"
            >
              <h1 className="font-bold mb-4 text-3xl text-center">{name}</h1>
              <div className="flex mb-1 flex-wrap">
                <h2 className="w-1/2 text-xl font-bold">Psicólogo:</h2>
                <h2 className="w-1/2 text-xl">{profesional}</h2>
              </div>
              <div className="flex mb-1 flex-wrap">
                <h2 className="w-1/2 text-xl font-bold">Valor:</h2>
                <h2 className="w-1/2 text-xl">${valorConsulta}</h2>
              </div>
              <div className="flex mb-1 flex-wrap">
                <h2 className="w-1/2 text-xl font-bold">Fecha</h2>
                <h2 className="w-1/2 text-xl">{fecha}</h2>
              </div>
            </div>
          );
        })
        ) : (
          <h1 className="mt-12 text-gray-500 text-3xl text-center w-full">
          Resultado no encontrado
        </h1>
      )}

        </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mr-2 bg-gray-200 rounded"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          >
          Anterior
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Cards;
