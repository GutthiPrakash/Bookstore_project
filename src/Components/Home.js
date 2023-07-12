import React from "react";
import list from '../data';
import '../styles/Home.css';
import Cards from "./Cards";

const Home = ({addtoCart}) => {
    return (
        <section>
            {
                list.map((item) => {
                    return <Cards item = {item} key={item.id} addtoCart={addtoCart}/>
                })
            }
        </section>
    )
}

export default Home;