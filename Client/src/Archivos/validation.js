const validation = (userData) => {
  const errors = {};

  //Email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
    errors.email = "Email inválido";
  }
  if (!userData.email) {
    errors.email = "Campo vacío";
  }
  if (userData.email.length > 35) {
    errors.email = "máximo 35 caracteres";
  }
  //Password
  if (!userData.password) {
    errors.password = "Campo vacío";
  }
  if (userData.password.length >= 1 || userData.password.length > 10) {
    errors.password = "Entre 6 y 10 caracteres";
  }
  if (!/.*[0-9].*/.test(userData.password)) {
    errors.password = "Debe contener al menos un número";
  } else {
    errors.password = "" || errors.email;
  }
  return errors;
};

export default validation;

/* const validation = (userData, errors, setErrors) => {
  //EMAIL

  if (!userData.email) setErrors({ ...errors, email: "Campo vacío" });
  else if (userData.email.length > 35)
    setErrors({
      ...errors,
      email: "máximo 35 caracteres",
    });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
  ) {
    setErrors({ ...errors, email: "Email inválido" });
  } else {
    setErrors({ ...errors, email: "" });
  }

  //PASSWORD

  if (userData.password.lenght < 6 || userData.password.lenght > 10) {
    setErrors({ ...errors, password: "Entre 6 y 10 caracteres" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un número" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};
export default validation; */
