import React from "react";
import HomeTab from "./Home";
import AboutTab from "./About";
import ProductsTab from "./Products";
import ContactTab from "./ContactUs";
import classes from "./Header.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import "./TabViewDemo.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function App() {
  return (
    <Router>
      <div  className="p-col-12">
        <ul className={classes.topnav}>
          <li leftIcon="pi pi-ellipsis-v">
            <Link leftIcon="pi pi-home" to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

function Home() {
  return <HomeTab />;
}

function About() {
  return <AboutTab />;
}
function Products() {
  return <ProductsTab />;
}
function Contact() {
  return (
    <div>
      <ContactTab />
    </div>
  );
}
