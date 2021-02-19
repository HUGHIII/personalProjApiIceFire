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

  // useEffect(() => {
  //   getdata();
  // }, []);
  let newArr = [];
  var pg = 1;
  var getdata = (page, letter) => {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=50`
      )
      .then((res) => {
        console.log(res, "res from get data");
        res.data.map((h) => {
          if (h.name.startsWith(`House A`)) {
            sethouses(houses.concat(h));
            console.log(houses, "inside map------------->>>");
          }

          // return houses;
        });

        // for (var i = 0; i < res.data.length; i++) {
        //   newArr.push(res.data[i]);
        // }

        if (res.data[0].name > `House A`) {
          return houses;
        } else {
          pg += 1;
          getdata(pg);
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
  console.log(newArr, "newarr after getdata func and HTTP req");

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
        return <h2 onClick={() => getdata(a)}>{a}</h2>;
      })}
    </div>
  );
};

export default Houses;
