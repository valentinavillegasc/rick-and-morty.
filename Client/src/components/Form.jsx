import React from "react";
import style from "../estilos/Form.module.css";
import { useState } from "react";
import validation from "../Archivos/validation";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    /* const property = event.target.name; */ //propiedad que quiero modificar
    const value = event.target.value;

    setUserData({ ...userData, [event.target.name]: value });
    /*  validation({ ...userData, [property]: value }, errors, setErrors); */
    setErrors(validation({ ...userData, [event.target.name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt="Logo"
        className={style.logo}
      />
      <p className={style.titulo}>Login</p>
      <div className={style.field}>
        <label htmlFor="email">Email</label>
        <input
          className={style.input}
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {/* <p>{errors.email}</p> */}
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className={style.field}>
        <label htmlFor="password">Password</label>
        <input
          className={style.input}
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {/* <p>{errors.password}</p> */}
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className={style.buttonCont}>
        <button className={style.loginButton}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
