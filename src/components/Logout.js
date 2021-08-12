import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const Logout = () => {
  let history = useHistory();
  const clickButton = () => {
    history.push("./");
  };
  return (
    <>
      <h1>You are successfully logged in</h1>
      <Button type="primary" className="button" onClick={clickButton}>
        Log out
      </Button>
    </>
  );
};

export default Logout;
