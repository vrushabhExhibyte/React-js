import React, { useState } from "react";
import "./index.css";

const Form = () => {
  const [userLogin, setUserLogin] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...userLogin };
    console.log(data);
    setData([...data, newData]);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={userLogin.firstName}
          onChange={handleInput}
        />
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={userLogin.lastName}
          onChange={handleInput}
        />
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={userLogin.email}
          onChange={handleInput}
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Form;
