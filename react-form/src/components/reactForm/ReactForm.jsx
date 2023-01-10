import React, { useContext } from "react";
import "./ReactForm.css";
import { dataJson } from "../../api/data.js";
import { db } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

const ReactForm = () => {
  const { form, setForm } = useContext(UserContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCkecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(form);
    localStorage.setItem("form", JSON.stringify(form));
  };

  const successAlerta = () => {
    Swal.fire({
      icon: "success",
      title: "Respuesta enviada!",
      html:
        "Para ver tus respuestas hacé , " +
        '<a href="http://localhost:3000/response"><b>Click Aquí</b></a> ',
    });
  };

  const errorAlerta = () => {
    Swal.fire("Error", "Debes completar el formulario", "error");
  };

  const addData = async (obj) => {
    if (Object.entries(obj).length > 0) {
      await addDoc(collection(db, "dataForm"), obj);
    } else {
      console.log("No hay datos para enviar");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>React Form</h1>
        {dataJson.map((item) => {
          if (item.type === "select")
            return (
              <label key={item.label}>
                {item.label}
                <select
                  name={item.name}
                  value={item.options.label}
                  onChange={handleChange}
                  className="select"
                >
                  {item.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            );
          if (
            item.type === "text" ||
            item.type === "email" ||
            item.type === "date"
          )
            return (
              <label key={item.label}>
                {item.label}
                <input
                  name={item.name}
                  type={item.type}
                  required={item.required}
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            );
          if (item.type === "checkbox")
            return (
              <label key={item.label} className="checkbox">
                {item.label}
                <input
                  name={item.name}
                  type={item.type}
                  value={form.name}
                  onChange={handleCkecked}
                  required={item.required}
                />
              </label>
            );
          if (item.type === "submit")
            return (
              <label key={item.label} className="button">
                <input
                  type={item.type}
                  onClick={
                    Object.entries(form).length === 0
                      ? errorAlerta
                      : successAlerta
                  }
                />
              </label>
            );
        })}
      </form>
    </div>
  );
};

export default ReactForm;
