import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const DateContext = createContext();
export const DateDispatch = createContext();

const ContextCitas = ({ children }) => {
  const [data, setData] = useState(null);
  const [isSearch, setIsSearch] = useState("");
  const [isPsicologo,setIsPsicolog]=useState('')

  const firebasePsicologo=async () => {
    const q = query(collection(db, "profesional"), where("userId", "==", isSearch));
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

  const state = { data };
  const dispatch = { setData, setIsSearch };

  return (
    <DateContext.Provider value={state}>
      <DateDispatch.Provider value={dispatch}>{children}</DateDispatch.Provider>
    </DateContext.Provider>
  );
};

export default ContextCitas;
