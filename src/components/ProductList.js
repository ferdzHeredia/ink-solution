import React, { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./DataViewDemo.css";
import { Card } from "primereact/card";
import Data from "./Product.json";

const ProductView = () => {
  //const [products, setProducts] = useState(null);
  const [layout, setLayout] = useState("grid");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const renderListItem = () =>
    Data.map((data) => {
      console.log(data.name);
      return (
        <div className="p-col-12">
          <div className="product-list-item">
            <img
              src={`showcase/${data.image}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={data.name}
            />
            <div className="product-list-detail">
              <div className="product-name">{data.name}</div>
              <div className="product-description">{data.description}</div>
              <Rating value={data.rating} readOnly cancel={false}></Rating>
              <i className="pi pi-tag product-category-icon"></i>
              <span className="product-category">{data.category}</span>
            </div>
            <div className="product-list-action">
              <span className="product-price">${data.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                label="Details"
                disabled={data.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
              <span className={`product-badge status-${data.inventoryStatus}`}>
                {data.inventoryStatus}
              </span>
            </div>
          </div>
        </div>
      );
    });

  const renderGridItem = () =>
    Data.map((data) => {
      return (
        <div className="p-col-12 p-md-4">
          <div className="product-grid-item card">
            <div className="product-grid-item-top">
              <div>
                <i className="pi pi-tag product-category-icon"></i>
                <span className="product-category">{data.category}</span>
              </div>
              <span className={`product-badge status-${data.inventoryStatus}`}>
                {data.inventoryStatus}
              </span>
            </div>
            <div className="product-grid-item-content">
              <img
                src={`showcase/demo/images/product/${data.image}`}
                onError={(e) =>
                  (e.target.src =
                    "data:image/jpeg;base64,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3UT3ijx37R2Lx4+X7YfEXxAWxNMhkq28VxZ2PZl0PnBtO9LkvjiSzYPG+U9BXLE7/F3fPPT3N41qVS2CxqG9svQVrstrg+B1tQbjdqJEKlmrZWz9+9MjupRumpXd8uy99PPZrq0fOrsHEU6FTNRqKrLTqIbbnW5sFGo/CON3ATIbX2eg2Y1TIDVdlqFhrYOVJAPiXc8OPqkHJjbG0MNTyV8Dj69PMuVehqZ06t9Cyare/m0tIritn7QKmgcPjOgLA5OhqZBc3sDkvYHW27yS1VKcYW1umuy9/VmaVKvKom8rSTeTzSsn9Fbf3GCp1MtRDuYI/rKt/We6lSCUkapYLvpUaZ745a4D1PFv67AWtbXipsHFk5vcmK99/oVewfk9rH1Tphth4vN1sLigT20athcfm9mkpjUUXpf2vT/ZqqUXNJ3tv89uzXXXdbU+/uroqRKhQzgooS9gh324nTex1N7X109I2hTo0EHe6lQqrLTX8FTYoB0ldv8AUqnQ5BohQcbgcLsjFOWvhsQF0A7zVzWG4AZdATroCd27fLN5uuaULlxO0kDNoaeGNio7Gr8GP5G4cb7hXUd7FmHio3SVvf2I5yE5u8Rtap7sxrOmHYgljpVr6e88VN3WtqN3aL62ds6nhqSUaFNadNBZUUWA/vfUneZ7ALTmVmgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//9k=")
                }
                alt={data.name}
              />
              <div className="product-name">{data.name}</div>
              <div className="product-description">{data.description}</div>
              <Rating value={data.rating} readOnly cancel={false}></Rating>
            </div>
            <div className="product-grid-item-bottom">
              <span className="product-price">${data.price}</span>
              <Button
              style={{backgroundColor:"#00897b  "}}
                icon="pi pi-info-circle"
                label="Details"
                disabled={data.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      );
    });

  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderListItem(product);
    else if (layout === "grid") return renderGridItem(product);
  };

  const renderHeader = () => {
    return (
      <div className="p-grid p-nogutter">
        <div className="p-col-6" style={{ textAlign: "left" }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By Price"
            onChange={onSortChange}
          />
        </div>
        <div className="p-col-6" style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <Card className="p-col-10" style={{ margin: "0 auto", marginTop: "2rem" }}>
      <div className="dataview-demo">
        <div className="card">
          <DataView
            value={Data}
            layout={layout}
            header={header}
            itemTemplate={itemTemplate}
            paginator
            rows={1}
            sortOrder={sortOrder}
            sortField={sortField}
          />
        </div>
      </div>
    </Card>
  );
};
export default ProductView;
