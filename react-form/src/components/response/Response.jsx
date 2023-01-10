import React, { useState, useEffect } from "react";
import "./Response.css";
import { db } from "../../firebase/firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Response = () => {
  const [res, setRes] = useState([]);

  console.log(res);

  const getData = () => {
    return JSON.parse(localStorage.getItem("form"));
  };

  const clearData = () => {
    localStorage.removeItem("form");
    console.log("datos borrados");
  };

  /* onSnapshot(collection(db, "dataForm"), (snapshot) => {
    setRes(snapshot.docs.map((doc) => doc.data()));
  }); */

  useEffect(() => {
    setRes(getData());
  }, []);

  return (
    <div className="container">
      <h1>Tus Respuestas</h1>

      <>
        <h4>Nombre Completo</h4>
        <p>{res.fullname}</p>

        <h4>Correo Electrónico</h4>
        <p>{res.email}</p>

        <h4>País de Origen</h4>
        <p>{res.country}</p>

        <h4>Fecha de Nacimiento</h4>
        <p>{res.birthday}</p>
      </>

      <Link to="/" onClick={clearData}>
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Response;
