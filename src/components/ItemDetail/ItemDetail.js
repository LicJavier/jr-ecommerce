import React from "react";
import "./styles.css";
import CountContainer from "../CountContainer/CountContainer";

export default function ItemDetail({ item }) {

    return(
        <div className="container__detalle">
            <div>
                <img src={item.img} alt={item.categoria} />
            </div>
            <div className="container__item">
                <h3>{item.name}</h3>
                <h5>${item.price}</h5>
                <h5>Stock: {item.stock}.</h5>
                <p>Descripción: {item.description}</p>
                <CountContainer item={item} stock={item.stock} />
            </div>
        </div>
    )
}
