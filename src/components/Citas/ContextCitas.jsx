import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
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
    const q = query(
      diaryCollection,
      where("fecha", ">=", `2023-${filterData.month}-01`),
      where("fecha", "<=", `2023-${filterData.month}-31`)
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
      const snapshot = await getDocs(diaryCollection);
      const diaryData = snapshot.docs.map((doc) => doc.data());
      setData(diaryData);
    } catch (e) {
      console.error("Error fetching data from Firestore: ", e);
    }
  };

  async function buscarEnFirebase() {
    const q = query(collection(db, "diary"), where("userId", "==", isSearch));
    const querySnapshot = await getDocs(q);
    // Devolver los resultados de la consulta
    const nuevosDatos = querySnapshot.docs.map((doc) => doc.data());
    setData(nuevosDatos);
  }

  useEffect(() => {
    if (isSearch.length === 0) {
      getData();
      return;
    }
    buscarEnFirebase(isSearch);
  }, [isSearch]);

  useEffect(() => {
    if (isPsicologo?.length === 0) {
      getData();
      return;
    }
    firebasePsicologo(isPsicologo);
  }, [isPsicologo]);

  useEffect(() => {
    if (filterData.month?.length === 0) {
      getData();
      return;
    }
    firebaseMonth(filterData.month);
  }, [filterData.month]);

  useEffect(() => {
    if (filterData.year?.length === 0) {
      getData();
      return;
    }
    firebaseYear(filterData.year);
  }, [filterData.year]);

  const state = { data, filterData };
  const dispatch = { setData, setIsSearch, setIsPsicolog, setFilterData };

  return (
    <DateContext.Provider value={state}>
      <DateDispatch.Provider value={dispatch}>{children}</DateDispatch.Provider>
    </DateContext.Provider>
  );
};

export default ContextCitas;
