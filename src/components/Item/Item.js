import React from "react";
import CountContainer from "../CountContainer/CountContainer";
import './item.css';

export default function Item({ item }) {
    return(
        <div>
            <div>
                <img src={item.img} alt={item.categoria} />
            </div>
            <div className="container__item">
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
                <h5>Stock: {item.stock}.</h5>
                <span>Descripción: {item.description}</span>
            </div>
            <CountContainer />
        </div>
    )
}

