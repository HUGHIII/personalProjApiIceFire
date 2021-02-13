import React, { useState, useEffect } from "react";
import axios from "axios";

import HousesCard from "./HousesCard";

const Houses = () => {
  const [houses, sethouses] = useState([]);

  var alph = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  useEffect(() => {
    getdata();
  }, []);
  var pg = 1;
  var getdata = (page) => {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=50`
      )
      .then((res) => {
        sethouses(res.data);
        console.log(res, "res from get data");
        console.log(houses, "houses from getdata");
        if (res.data.length > 0) {
          pg += 1;
          getdata(pg);
        } else if (!res.data.name) {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // for (let i = 1; i < houses.length; i++) {
  //   getdata(i);
  // }
  console.log(houses, "after func");

  // 1.iterate thru each data item in url fetch and store to 'houses' in useEffect
  // ----use for loop incrementing i var up from 1 inserting each consecutive ascending integer into GET url using pagination IF Resonse data is available/boolean true (documentaion for api states that you should be able to request all of the data by fetching url + /api/houses but when console logged this only shows the first 10 elements)

  // 2. iterate thru each letter of alphabet and render onto page

  // 3. set an onClick function for page rendered letter, iterate  thru 'houses', if data startswith() clicked letter pass info as props down to Housescard component to be rendered on page

  return (
    <div className="alphabet">
      {/* <h2 onClick={getdata}>click here !!!!!!!!!!!!!</h2>
      {houses.map((h) => (
        <HousesCard key={h.url} h={h} />
      ))} */}
      {alph.map((a) => {
        return <h2>{a}</h2>;
      })}
    </div>
  );
};

export default Houses;
