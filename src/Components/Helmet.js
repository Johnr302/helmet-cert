import React, { useEffect, useState } from "react";
// import base from "./Verification";
// import {Airtable} from "airtable";
import { Card, Button } from "react-bootstrap";
// var Airtable = require("airtable");

const Helmet = (props) => {
  const { Manufacturer, Model, Standard, Config, imageURL, Link } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imageURL}
        alt={Manufacturer + " " + Model + "image"}
      />
      <Card.Body>
        <Card.Title>{Manufacturer + Model}</Card.Title>
        <Card.Text>{"Safety standard: " + Standard}</Card.Text>
        <Card.Text>{"Type: " + Config}</Card.Text>

        <Button
          variant="primary"
          href={Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </Button>
      </Card.Body>
    </Card>
  );
};

const Helmets = () => {
  const [array, setArray] = useState([]);

  const setData = (data) => {
    setArray(data);
  };

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appJdhwF8rhgTbA7K/Table%201?api_key=key2iOVQv50XUKihs"
    )
      .then((resp) => resp.json())
      .then((data) => {
        let records = data.records;
        let filteredRecords = records.filter((record) => {
          return record.fields.Link !== "" && record.fields.imageURL;
        });
        setData(filteredRecords);
        console.log(data.records);
      })
      .catch((err) => {});
  }, []);

  // useEffect(() => {
  //   var Airtable = require("airtable");
  //   setArray = new Airtable({ apiKey: "YOUR_API_KEY" }).base(
  //     "appJdhwF8rhgTbA7K"
  //   );
  // }, []);

  return (
    <section className="cardContainer">
      {array.map((list, index) => {
        return <Helmet key={index} {...list.fields} />;
      })}
    </section>
  );
};

export default Helmets;
