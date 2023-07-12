import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useState } from 'react';
import './styles/Home.css';

const App = () => {

  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);

  const addtoCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart,item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
          ind = index;
    });
    const tempArry = cart;
    tempArry[ind].amount += d;
    if (tempArry[ind].amount ===0)
      tempArry[ind].amount = 1;
    setCart([...tempArry])
  }

  return(
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Home addtoCart={addtoCart}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
      
      warning && <div className='warning'>Item is already added to your cart</div>
      }
    </React.Fragment>
  )
}

export default App;
