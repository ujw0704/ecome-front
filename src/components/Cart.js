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

  //  function Increment(item, quantity) {
  // //   const updatedItem= {...item}
  // //   updatedItem["quantity"]++
  // //   setCart(cart=>[...cart].map (x=>{if(updatedItem===x){return x}}))
  // //   console.log("Increment",cart);
  //   }
    // const newQuantity=quantity+1
    // const newCart=[...cart]
    // const indexofItem=newCart.findIndex(({ id })=>id===item);
    // if (indexofItem!==-1){
    //   console.log("hello")
    //   const updatedProduct={...newCart[indexofItem],quantity:newQuantity}
    //   newCart.splice(indexofItem, 1 ,updatedProduct )
    //   setCart([...newCart]);
    // const updatedItem= {...item}
    // updatedItem["quantity"]=++quantity
    // setCart([...cart].map (x=> x===updatedItem?updatedItem:x))
    //     let index = cart.findIndex(({ id }) => id === item);
    //   if (!index || !cart[index] )  throw Error('Product not found');
    //    cart[index]["quantity"]++;
    //      setCart([...cart]);
    // console.log("increment",cart," ",item , " ",quantity)

  
 
    

    
  
  // console.log(exsitingincart)

//  console.log(exsitingincart)
  // const updatecart = cart.forEach(element => {



  //   if ((item._id=== element._id)) {
  //     console.log("inside")
  //     console.log('quantity',+1 + element.quantity);

  //   }
  
    // if ((item._id).toString()===(element._id)) {
    //   console.log("if")
    //   element.quantity=parseInt(element.quantity)+1
    //   console.log(element);
    //   } else{console.log('else')}
      // });
  
  // if (element.id === item.id){
  //   element.quantity=parseInt(element.quantity)+1

  //   }
  //   })
    
    //   element['quantity'] +=1
  //   }else{
  //     return null}
  //     })
  //    console.log(updatecart);
  // //   element.quantity++
  //   element
    
  // }
  // console.log(element)
//  }
//   // console.log(Increment)
  // console.log(updatecart)
  




   

    // console.log(cart)

    // console.log(updatedCart)


  // }



  // function Decrement(item) {

  // cart.forEach(element => {
  
  //     if (element.id !== item.id){
  //       element.quantity--
  //       return element
        
  //     }
  //     console.log(element)

   
    // })

    
    //  function Increment(e, item){
    //   if(cart)
    // }

    function Increment(item) {
      const updatedCart = cart.map((productInCart) => {
        if (productInCart.id === item.id) {
          
          return { ...productInCart, quantity: productInCart.quantity + 1 };
        }

        
        return productInCart;
      });
     console.log(updatedCart)
      setCart(updatedCart);

      
    }
    
  
    function Decrement(item) {
      const updatedCart = cart.map((productInCart) => {
        if (productInCart.id === item.id) {
        
          return { ...productInCart, quantity: productInCart.quantity > 0 ? productInCart.quantity - 1 : 0 };
        }
        return productInCart;
      });
    
      setCart(updatedCart);
    }
    
    

  return (
    <div className='display-cart'>
      {
        cart.map((item, index) => {
          return (
            <div className='item' key={index}>
              <div className='left'>
                <img src={item.image} alt="" />
              </div>
              <div className='right'>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <p>{item.length}</p>
                <p>{item.id}</p>
                <p>{item.quantity}</p>

                <button onClick={(e) => handledelete(e, item)}>Remove</button>




                <p><button onClick={(e) => {Increment(item)}}>+</button></p>
                        <p></p>

                <p><button onClick={() => Decrement(item )}>-</button></p>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
