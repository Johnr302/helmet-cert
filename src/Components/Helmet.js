import React, { useEffect, useState } from "react";
import base from "./Verification";
// var Airtable = require("airtable");

const Helmet = (props) => {
  const { Manufacturer, Model, Standard, Config } = props;
  return (
    <div>
      <p> {Manufacturer}</p>
      <p> {Model}</p>
      <p> {Config}</p>
      <p> {Standard}</p>

      <hr />
    </div>
  );
};

const Helmets = () => {
  const [array, setArray] = useState([]);

  // const setData = (data) => {
  //   setArray(data.records);
  // };

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appJdhwF8rhgTbA7K/Table%201?api_key=key2iOVQv50XUKihs"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setArray(data.records);
        console.log(data.records);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {array.map((list, index) => {
        return <Helmet key={index} {...list.fields} />;
      })}
    </div>
  );
};

export default Helmets;
