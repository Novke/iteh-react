import React, { useState } from "react";
import Button from "./Button2";
import TextBox from "./TextBox";
import Select from "react-select";
import "./FormTDEE.css";

function FormTDEE() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [gender, setGender] = useState("");
  const [intake, setIntake] = useState("");

  const [tdeeResult, setTdeeResult] = useState(null);

  function calculateTdee(e) {
    e.preventDefault();
    let bmr;
    if (gender === "Male") {
      bmr = Number(
        88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      ).toFixed(0);
    } else {
      bmr = Number(
        447.593 + 9.247 * weight + 3.098 * height - 4.33 * age
      ).toFixed(0);
    }
    setTdeeResult(bmr);

    let intake = getIntake(activity, bmr);

    setIntake(intake);
  }

  function getIntake(activity, bmr) {
    if (activity === "Sedentiary") return Number(bmr) + 360;
    else if (activity === "Light Exercise") return Number(bmr) + 680;
    else if (activity === "Moderate Exercise") return Number(bmr) + 1000;
    else return Number(bmr) + 1310;
  }

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Unesi podatke da saznas detaljnije informacije o preporucenom unosu kalorija!
        </h1>
        <div className="form-inputs">
          <label htmlFor="height" className="form-label">
            Visina
          </label>
          <TextBox
            id="height"
            type="text"
            name="height"
            placeholder="Visina u cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="weight" className="form-label">
            Tezina
          </label>
          <TextBox
            id="weight"
            type="text"
            name="weight"
            placeholder="Nema laganja"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="age" className="form-label">
            Godine
          </label>
          <TextBox
            id="age"
            type="text"
            name="age"
            placeholder="U godinama"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="gender" className="form-label">
            Pol
          </label>
          <Select
            id="gender"
            name="gender"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            onChange={(e) => setGender(e.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="activity" className="form-label">
            Aktivnosti
          </label>
          <Select
            id="activity"
            name="activity"
            options={[
              { value: "Sedentiary", label: "Neaktivan" },
              { value: "Light Exercise", label: "Lagan" },
              { value: "Moderate Exercise", label: "Solidno aktivan" },
              { value: "Heavy Exercise", label: "Poprilicno aktivan" },
            ]}
            onChange={(e) => setActivity(e.value)}
          />
        </div>
        <Button
          className="form-input-btn"
          text="Izkalkuliraj :D"
          onClick={(e) => calculateTdee(e)}
        />

        {tdeeResult && (
          <div>
            <p className="form-input-bmr">
              Tvoja stopa metabolizma je: {tdeeResult} kalorija po danu
            </p>
            <p className="form-input-bmr">
              Na osnovu tvojih aktivnosti, tvoje odrzavanje je: {intake}{" "}
              kalorija po danu
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormTDEE;
