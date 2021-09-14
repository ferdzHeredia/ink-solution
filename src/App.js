// import logo from './logo.svg';
import './App.css';
import TabView from './components/Tab'
import Products from './components/Products'
import HeaderTab from './components/Header'
import ProductData from './components/ProductData'

function App() {
  return (
    <div className="App">
      <header className="App-header p-col-12">
     <HeaderTab/>
     {/* <TabView/> */}
      </header>
      {/* <Products/> */}
      <ProductData/>
    </div>
  );
}

export default App;
