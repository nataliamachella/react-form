import { useState } from "react";
import "./App.css";
import { dataJson } from "./public/data.js";

function App() {
  const [form, setForm] = useState({});
  const options = dataJson[3].options;
  console.log(options);
  /* const options = [
    {
      label: "Argentina",
      value: "argentina",
    },
    {
      label: "Brasil",
      value: "brasil",
    },
    {
      label: "Chile",
      value: "chile",
    },
    {
      label: "Colombia",
      value: "colombia",
    },
    {
      label: "México",
      value: "mexico",
    },
    {
      label: "Perú",
      value: "peru",
    },
    {
      label: "Uruguay",
      value: "uruguay",
    },
    {
      label: "Venezuela",
      value: "venezuela",
    },
  ]; */

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
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        {dataJson.map((item) => {
          if (item.type === "select")
            return (
              <label key={item.label}>
                {item.label}
                <select
                  multiple={true}
                  value={item.options.label}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
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
              <label key={item.label}>
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
              <label key={item.label}>
                <input type={item.type} />
              </label>
            );
        })}
      </form>
    </div>
  );
}

export default App;
