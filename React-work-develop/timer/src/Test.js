import React from "react";
// import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import { BeatLoader } from "react-spinners";

const Button = (props) => {
  return (
    <div className="colors">
      <button
        onClick={props.clickSubmit}
        style={props.rahul}
        className={props.className}
        type={props.styleClass}
        loaing={props.loader}
      >
        {props.isProgress}
        {props.icons}
        {props.label}
      </button>
      <Button type="primary" />
    </div>
  );
};

export default Button;
