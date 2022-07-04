import React from "react";
import './item.css';
import { Link } from "react-router-dom";

export default function Item({ item }) {

    const urlDetalle = `/item/${item.id}`;

    return(
        <div>
            <div className="container__componente__item">
                <img src={ item.img } alt={ item.categoria } />
            </div>
            <div className="container__item">
                <h4>{ item.name }</h4>
                <h5>${ item.price }</h5>
                <Link to={ urlDetalle }>
                    <button className="button">Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}

