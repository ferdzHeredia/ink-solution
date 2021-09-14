import React from "react";

function ProductData(props) {
  const Data = [
    {
      Name: "Ferdi Heredia ",
      age: 28,
      gender: "Male",
    },
    {
      Name: "Miguel Avila ",
      age: 20,
      gender: "Male",
    },
    {
      Name: "Gian Victorin ",
      age: 18,
      gender: "Male",
    },
    {
      Name: "Nain Victorin ",
      age: 38,
      gender: "Male",
    },
    {
      Name: "Berenice Heredia ",
      age: 20,
      gender: "Female",
    },
  ];
  const AllData = Data.map((items) => items.age)
  return (
    <div>
      <div> {Data.map((items) => items.Name)}</div>
      <div> {`${AllData}`}</div>
    </div>
  );
}

export default ProductData;
