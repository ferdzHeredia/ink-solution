import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const ProductCard = () => {
  const header = (
    <img
      alt="Card"
      src="./ProductImages/inksol.jpg"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      alt="inks"
    />
  );
  const footer = (
    <span>
      <div className="car-buttons p-mt-5">
        <Button
          icon="pi pi-search"
          className="p-button p-button-rounded p-mr-2"
        />
        <Button
          icon="pi pi-star"
          className="p-button-success p-button-rounded p-mr-2"
        />
        <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
      </div>
    </span>
  );

  return (
    <div>
      <br/>
      <br/>
      <Card
        title="Advanced Card"
        subTitle="Subtitle"
        style={{ width: "15em" }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: "1" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        </p>
       
      </Card>
    </div>
  );
};
export default ProductCard;
