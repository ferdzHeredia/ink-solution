import React from "react";

function ProductData(props) {
  const Data = [
    {
      index: 0,
      ProductName: "Color4work Compatible Brother TN760 TN730 TN-760 Toner Cartridge with Brother MFC-L2710DW HL-L2350DW HL-L2395DW DCP-L2550DW MFC-L2750DW Black 4-Pack ",
      Price: "20",
      Available: "In Stock",
      description: "some descrption"
    },
    {
      index: 1,
      ProductName: "Color4work Compatible Brother TN760 TN730 TN-760 Toner Cartridge with Brother MFC-L2710DW HL-L2350DW HL-L2395DW DCP-L2550DW MFC-L2750DW Black 4-Pack ",
      Price: "10",
      Available: "Out Of Stock",
      description: "some descrption"
    },
    {
      index: 2,
      ProductName: "Color4work Compatible Brother TN760 TN730 TN-760 Toner Cartridge with Brother MFC-L2710DW HL-L2350DW HL-L2395DW DCP-L2550DW MFC-L2750DW Black 4-Pack",
      Price: "40",
      Available: "In Stock",
      description: "some descrption"
    },
    {
      index:3,
      ProductName: "Color4work Compatible Brother TN760 TN730 TN-760 Toner Cartridge with Brother MFC-L2710DW HL-L2350DW HL-L2395DW DCP-L2550DW MFC-L2750DW Black 4-Pack ",
      Price: "70",
      Available: "Out Of Stock",
      description: "some descrption"
    },
    {
      index:4,
      ProductName: "Color4work Compatible Brother TN760 TN730 TN-760 Toner Cartridge with Brother MFC-L2710DW HL-L2350DW HL-L2395DW DCP-L2550DW MFC-L2750DW Black 4-Pack",
      Price: "60",
      Available: "In Stock",
      description: "some descrption"
    },
  ];
  const allProductNames = Data.map((items) => items.ProductName )
  const allProductPrice = Data.map((items) => "$" + items.Price + ".00, " )
  return (
    <div>
     
      <div> {allProductNames}</div>
      <div>Price: {allProductPrice}</div>
    </div>
  );
}

export default ProductData;
