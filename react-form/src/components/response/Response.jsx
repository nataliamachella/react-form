import React, { useState, useEffect } from "react";
import "./Response.css";

import { Link } from "react-router-dom";

const Response = () => {
  const [res, setRes] = useState([]);

  const email = JSON.stringify(res.email);
  console.log(email);

  const getData = () => {
    return JSON.parse(localStorage.getItem("form"));
  };

  const clearData = () => {
    localStorage.removeItem("form");
    console.log("Datos borrados del localstorage");
  };

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
