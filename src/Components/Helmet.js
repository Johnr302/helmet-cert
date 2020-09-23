import React, { useEffect, useState } from "react";

import base from "./Verification";
// var Airtable = require("airtable");

const Helmet = (props) => {
  const { Manufacturer } = { ...props };
  return (
    <div>
      <p>{Manufacturer}</p>
      <hr />
    </div>
  );
};

const Helmets = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appJdhwF8rhgTbA7K/Table%201?api_key=key2iOVQv50XUKihs"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setArray(data.records);
        console.log(data.records);
      })
      .catch((err) => {
        // Error :(
      });
  }, []);
  //   return <p>hello</p>;

  return (
    <div>
      {array.map((list, index) => {
        return <Helmet key={index} Manufacturer={list.fields.Manufacturer} />;
      })}
    </div>
  );
};

export default Helmets;
