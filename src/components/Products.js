
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import "./Product.css"
import { cont } from '../App';
function Products() {

  const { products, setProducts, cart, setCart } = useContext(cont)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        const productsData = response.data;
        console.log(productsData)
        setProducts(productsData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {

    localStorage.setItem("cartitems", JSON.stringify(cart))



  }, [cart])
  console.log(cart)
  function handleClick(e, product) {

    let item = product
    item.quantity = 1
    e.preventDefault()
    setCart([...cart, item])

  
    
    axios.post('http://localhost:8080/Product',item)
    .then((result) => {
      
      
      console.log(result.data)
      
      
      
      
    })
  }


  return (



    <div className='wrapper'>
      <ul className="product-list">
        {products.map(product => (
          <div className='product' key={product.id}>
            {/* <p>{product.description}</p> */}
            <p>Price: ${product.price}</p>
            <h2>{product.title}</h2>
            <div className="image-container">
              <img src={product.image} alt="product" />
              {/* <h2> {product.quantity} </h2> */}
            </div>
            <button onClick={(e) => handleClick(e, product)}>add to cart</button>
          </div>
        ))}
      </ul>
    </div>



  );

}
export default Products;
