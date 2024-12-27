import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = React.useState([]);
  const [rangeValue, setRangeValue] = React.useState(36);
  const [selectedRadio, setSelectedRadio] = React.useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
        {radios.map((continent) => {
          return (
            <li key={continent}>
              <input
                type="radio"
                id={continent}
                name="continentRad  io"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>

      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country) => {
            return <Card key={country.cca2} country={country} />;
          })}
      </ul>
    </div>
  );
};

export default Countries;
