import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>Countrie work !</h1>
      <ul>
        {data.map((country) => {
          return <Card key={country.cca2} country={country} />;
        })}
      </ul>
    </div>
  );
};

export default Countries;
