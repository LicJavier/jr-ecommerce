import React from "react";
import Item from "../item/Item";
import "./itemList.css"


export default function ItemList({items}) {
    return(
        <div className="item__mandalas">
            {items.map((item) => (
            <Item key={item.id} item={item} />
            ))}
            
        </div>
    )
}
