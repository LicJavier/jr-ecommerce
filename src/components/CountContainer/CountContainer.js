import React from "react";
import ItemAdd from "./ItemAdd/ItemAdd";
import ItemCount from "./ItemCount/ItemCount";

export default function CountContainer() {
    return (
        <div className="container-fluid">
            <ItemCount stock={5} initial={1}/>
            <ItemAdd />
        </div>
    )
}