//import PostData from './product.json'
export class ProductService {
  getProductsSmall() {
    return fetch("./products-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getProducts() {
    return fetch("./Product.json")
      .then((res) => {return res.json()})
      .then((d) => console.log(d.data));
     
    // return fetch("./Product.json")
    //   .then((data) => {
    //     console.log(data)
    //     return data;
    //   });
  }

  getProductsWithOrdersSmall() {
    return fetch("./products-orders-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
