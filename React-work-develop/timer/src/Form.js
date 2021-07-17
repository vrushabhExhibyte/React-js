import React, { useState } from "react";
import Test from "./Test";
// import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
// import { Button } from "@material-ui/core";
import { BeatLoader } from "react-spinners";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProgress, setIsProgress] = useState(true);

  const handleSubmit = (event) => {
    console.log({ firstName, email, password });

    event.preventDefault();
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  setTimeout(() => {
    setIsProgress(false);
  }, 3000);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
        Name:
        <input
          name="firstName"
          type="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
      </label>
      {/* <button disabled={!firstName || !email || !password} type="submit">
        Submit
      </button>
      <button
        type="reset"
        onClick={() => {
          setFirstName("");
          setEmail("");
          setPassword("");
        }}
      >
        Reset
      </button> */}

      <Test
        clickSubmit={props.type}
        icons={<BeatLoader />}
        isProgress={isProgress}
        // icon={<ArrowUpwardRoundedIcon />}
        label="submit"
      />
    </form>
  );
};

export default Form;
