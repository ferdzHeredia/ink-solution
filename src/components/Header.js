import React from "react";
import HomeTab from "./Home";
import AboutTab from "./About";
import ProductList from "./ProductList";
//import ProductsTab from "./Products";
import ContactTab from "./ContactUs";
import Service from "./Service";
import classes from "./Header.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <a href="/home" className={classes.toggleButton}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
          </a>
          <ul className={classes.topnav}>
            <li className={classes.home}>
              <Link to="/home">Home</Link>
            </li>
            <li className={classes.link}>
              <Link to="/products">Products</Link>
            </li>
            <li className={classes.link}>
              <Link to="/about">About</Link>
            </li>
            <li className={classes.link}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={classes.link}>
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </div>
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
          <Route path="/service">
            <Service />
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
  return <ProductList />;
}
function Contact() {
  return (
    <div>
      <ContactTab />
    </div> 
  );
  function Service() {
    return (
      <div>
        <Service />
      </div>
    );
};
}
