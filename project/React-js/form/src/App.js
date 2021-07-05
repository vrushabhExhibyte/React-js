import React, { Component } from "react";

export default function App() {
  const [email, setEmail] = React.useState("");
  const [name1, setName1] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Name: ${name1}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

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
        Name:
        <input
          name="name1"
          type="name1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={(e) => setAcceptedTerms(e.target.value)}
          required
        />
        I accept the terms of service
      </label>
      <button>Submit</button>
    </form>
  );
}

