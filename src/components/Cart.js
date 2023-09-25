import React, { useContext } from 'react'
import { cont } from '../App'
import "./Cart.css"

function Cart() {
    const {cart, setCart} = useContext(cont)

    function handledelete(e ,item){

        const newCart = cart.filter((productInCart) => {
           return productInCart.id !== item.id;
        });
        setCart([...newCart ])

        console.log(cart)
        
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
                        <p>{item.id}</p>
                         
                        <button onClick={(e) => handledelete(e, item)}>Remove</button>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Cart
