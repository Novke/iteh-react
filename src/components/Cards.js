import React from "react";
import "./Cards.css";
import CardItem from "./Card";

function Cards() {
  return (
    <div className="cards">
      <h1>Mozda vas zanima nesto od ovoga</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Top 10 razloga da se pod hitno preselite na Konjarnik"
              label="Lifestyle"
              path="/library"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Mozda je bas Katedra za Elektronsko Poslovanje karijera i za Vas!"
              label="Posao"
              path="/library"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Athletic's teretana na Konjarniku je proglasena za najbolju Athletic's teretanu na Konjarniku"
              label="Dostignuca"
              path="/library"
            />
            <CardItem
              src="images/img-4.jpg"
              text="IDE ZEKA PREKO MOSTA MENI 6 JE STVARNO DOSTA"
              label="molim vas"
              path="/library"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Peti slajd koji niko ne gleda svakako"
              label="Horror"
              path="/library"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
