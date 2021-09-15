import React from "react";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import ProductCard from "./ProductCard";

const CardGroup = () => {
  
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <div className="p-grid">
        <div className="p-col"><ProductCard/></div>
        <div className="p-col"><ProductCard/></div>
        <div className="p-col"><ProductCard/></div>
        <div className="p-col"><ProductCard/></div>
      </div>
    </div>
  );
};
export default CardGroup;
