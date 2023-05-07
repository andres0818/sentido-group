import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { Profile } from "./Profile";
import NewDiary from "./NewDiary";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isForm, setIsForm] = useState({
    diary: false,
    history: false,
    list: false,
  });

  const getUser = async (id) => {
    const docRef = doc(db, "patient", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  const handlerForm = ({ btn = "cita" }) => {
    setIsForm({ ...user, diary: !isForm.diary });
  };

  return (
    <>
      <Profile user={user} />
      <div className="flex justify-center">
        <button
          onClick={handlerForm}
          className="w-1/3 max-w-sm shadow-xl rounded-md text-2xl m-4 px-4 py-3 bg-green-500 hover:bg-green-600"
        >
          Nueva Cita
        </button>
      </div>
      {isForm.diary && <NewDiary user={user} />}
    </>
  );
};

export default User;
