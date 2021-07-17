import React, { useState } from "react";

const PracticeForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n 
            password: ${password} \n 
            You can replace this alert with your process`);

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="En   ter email"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <button type="submit" disabled={!email || !password}>
        Login
      </button>
    </form>
  );
};
export default PracticeForm;
