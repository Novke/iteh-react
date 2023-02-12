import React from "react";
import CardItem from "./Card";
import FormTDEE from "./FormTDEE";
import "./FormTDEE.css";

const FormOne = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="images/img.svg" alt="zen" className="form-img" />
        </div>
        <FormTDEE />
      </div>
    </>
  );
};

export default FormOne;
