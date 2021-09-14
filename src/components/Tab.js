import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import "./TabViewDemo.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Card } from "primereact/card";


const TabViewDemo = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <Card className="p-col-12">
      <div className="tabview-demo">
        <div className="card">
          <TabView className="tabview-custom">
            <TabPanel header="Home" leftIcon="pi pi-home"></TabPanel>
            <TabPanel header="Products" leftIcon="pi pi-ellipsis-v"></TabPanel>
            <TabPanel header="Services" leftIcon="pi pi-user"></TabPanel>
            <TabPanel
              header="About"
              leftIcon="pi pi-info-circle"
              // rightIcon="pi pi-info-circle"
            ></TabPanel>
            <TabPanel header="Contact Us" leftIcon="pi pi-reply"></TabPanel>
          </TabView>
        </div>
      </div>
    </Card>
  );
};
export default TabViewDemo;
