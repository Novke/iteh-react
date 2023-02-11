import React from "react";
import { Text, TextInput } from "react-native-web";
import "./Registration.css";
import "./Landing.css";

function Registration() {
  return (
    <div className="form-wrapper">
      <h1 className="header">Sign Up</h1>
      <input type="text" className="input" placeholder="Your name"></input>
      <input type="email" className="input" placeholder="Your email"></input>
      <input
        type="password"
        className="input"
        placeholder="Your password"
      ></input>
      <button class="btns" type="submit">
        <span>Sign Up</span>
      </button>
    </div>
  );
}

export default Registration;
