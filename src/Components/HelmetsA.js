import React from "react";
import Airtable from "airtable";
import "./App.css";

var base = new Airtable({ apiKey: "key2iOVQv50XUKihs" }).base(
  "appJdhwF8rhgTbA7K"
);

base("Table 1")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Manufacturer"));
      });

      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

base("Table 1")
  .select({
    view: "Grid view",
  })
  .firstPage(function (err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log("Retrieved", record.get("Manufacturer"));
    });
  });

export default base;
