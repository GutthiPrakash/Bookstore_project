import React,{useEffect, useState} from "react";
import '../styles/Cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
      const [ price, setPrice ] = useState(0);
    
      const calculatePrice = () => {
        let total = 0;
        cart.map((item) => (
            total += item.amount * item.price
        ))
        setPrice(total);
      }

      const removeItem = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
      }

      useEffect(() => {
        calculatePrice();
      })

    return (
        <article>
            {
                cart.map((item) => {
                return<div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="image"/>
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button onClick = {()=> handleChange( item, +1 )} >+</button>
                            <button>{item.amount}</button>
                            <button onClick = {()=> handleChange( item, -1 )}>-</button>
                        </div>
                        <div>
                            <span>{item.price} /-</span>
                            <button onClick = {() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                })
            }
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs - {price} /-</span>
            </div>
        </article>
    )
}

export default Cart;