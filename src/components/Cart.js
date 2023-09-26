import React, { useContext, useState } from 'react'
import { cont } from '../App'
import "./Cart.css"

function Cart() {
  const { cart, setCart } = useContext(cont)


  function handledelete(e, item) {

    const newCart = cart.filter((productInCart) => {
      return productInCart.id !== item.id;
    });
    setCart([...newCart])

    console.log(cart)

  }

  function Increment(item) {
//  const exsitingincart = cart.filter((productInCart)=>{
//   return productInCart.id !==item.id

//  })
//   cart.forEach(element => {
  
//   if (element.id === item.id){
//     element.quantity++
//     return element
    
//   }
//  });
//   console.log(Increment)
// //  console.log(updatCart)
  




   

    console.log(cart)

    // console.log(updatedCart)


  }



  function Decrement(item) {


  }

  return (
    <div className='display-cart'>
      {
        cart.map((item, index) => {
          return (
            <div className='item'>
              <div className='left'>
                <img src={item.image} alt="" />
              </div>
              <div className='right'>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <p>{item.length}</p>
                <p>{item.id}</p>

                <button onClick={(e) => handledelete(e, item)}>Remove</button>




                {/* <p><button onClick={() => Increment(item)}>+</button></p>


                <p><button onClick={() => Decrement(item)}>-</button></p> */}

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
