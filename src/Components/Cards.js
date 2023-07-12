import React from "react";
import '../styles/Cards.css';

const Cards = ({item, addtoCart}) => {
    const { title, author, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img}  alt="Image"/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price - {price} Rs</p>
                <button onClick={()=> addtoCart(item)} >Add to Cart</button>
            </div>
        </div>
    )
}

export default Cards;