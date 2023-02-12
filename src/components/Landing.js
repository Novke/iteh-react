import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <h1>POCNI ZDRAVO DA SE HRANIS!</h1>
      <p>Pocni zajedno sa nama</p>
      <div className="landing-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Lec's Go!
        </Button>
      </div>
    </div>
  );
}

export default Landing;
