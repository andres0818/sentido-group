import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const DateContext = createContext();
export const DateDispatch = createContext();

const ContextCitas = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const diaryCollection = collection(db, "diary");

    try {
      const snapshot = await getDocs(diaryCollection);
      const diaryData = snapshot.docs.map((doc) => doc.data());
      console.log(diaryData);
    } catch (e) {
      console.error("Error fetching data from Firestore: ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const state = { data };
  const dispatch = { setData };

  return (
    <DateContext.Provider value={state}>
      <DateDispatch.Provider value={dispatch}>{children}</DateDispatch.Provider>
    </DateContext.Provider>
  );
};

export default ContextCitas;
