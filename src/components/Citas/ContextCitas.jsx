import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where, limit  } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const DateContext = createContext();
export const DateDispatch = createContext();

const ContextCitas = ({ children }) => {
  const [data, setData] = useState(null);
  const [isSearch, setIsSearch] = useState("");
  const [isPsicologo, setIsPsicolog] = useState("");
  const [filterData, setFilterData] = useState({ month: "", year: "" });

  const firebaseMonth = async () => {
    const diaryCollection = collection(db, "diary");
    const year= filterData.year === ''?'2023':filterData.year
    const q = query(
      diaryCollection,
      where("fecha", ">=", `${year}-${filterData.month}-01`),
      where("fecha", "<=", `${year}-${filterData.month}-31`)
    );
    const querySnapshot = await getDocs(q);
    // Devolver los resultados de la consulta
    const nuevosDatos = querySnapshot.docs.map((doc) => doc.data());
    console.log(nuevosDatos);
    setData(nuevosDatos);
  };

  const firebaseYear = async () => {
    const diaryCollection = collection(db, "diary");
    const q = query(
      diaryCollection,
      where("fecha", ">=", `${filterData.year}-01-01`),
      where("fecha", "<=", `${filterData.year}-12-31`)
    );
    const querySnapshot = await getDocs(q);
    // Devolver los resultados de la consulta
    const nuevosDatos = querySnapshot.docs.map((doc) => doc.data());
    console.log(nuevosDatos);
    setData(nuevosDatos);
  };


  const firebasePsicologo = async () => {
    const q = query(
      collection(db, "diary"),
      where("profesional", "==", isPsicologo)
    );
    const querySnapshot = await getDocs(q);
    // Devolver los resultados de la consulta
    const nuevosDatos = querySnapshot.docs.map((doc) => doc.data());
    setData(nuevosDatos);
  };

  const getData = async () => {
    const diaryCollection = collection(db, "diary");
    
    try {
      console.log("Me ejecute, getData")
        // Crear la consulta con un límite de 20 resultados
        const q = query(diaryCollection, limit(20));
        const snapshot = await getDocs(q);
        const diaryData = snapshot.docs.map((doc) => doc.data());
        setData(diaryData);
    } catch (e) {
        console.error("Error fetching data from Firestore: ", e);
    }
};

  async function buscarEnFirebase() {
    console.log("Me ejecute")
    const diaryCollection = collection(db, "diary");
    const q = query(diaryCollection)
    const querySnapshot = await getDocs(q);
    
    const searchNormalized = isSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const nuevosDatos = querySnapshot.docs
        .filter(doc => 
            doc.data().name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchNormalized) || 
            doc.data().userId.toLowerCase().includes(searchNormalized)
        )
        .map(doc => doc.data());
    
    setData(nuevosDatos);
}

useEffect(() => {
  if (
    isSearch.length === 0 &&
    isPsicologo.length === 0 &&
    filterData.month.length === 0 &&
    filterData.year.length === 0
  ) {
    getData();
  } else {
    if (isSearch.length > 0) {
      buscarEnFirebase();
    }
    if (isPsicologo.length > 0) {
      firebasePsicologo(isPsicologo);
    }
    if (filterData.month.length > 0) {
      firebaseMonth(filterData.month);
    }
    if (filterData.year.length > 0) {
      firebaseYear(filterData.year);
    }
  }
}, [isPsicologo, filterData.month, filterData.year]);

  const state = { data, filterData };
  const dispatch = { setData, setIsSearch, setIsPsicolog, setFilterData,buscarEnFirebase };

  return (
    <DateContext.Provider value={state}>
      <DateDispatch.Provider value={dispatch}>{children}</DateDispatch.Provider>
    </DateContext.Provider>
  );
};

export default ContextCitas;
