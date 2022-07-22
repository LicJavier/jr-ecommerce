import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const OrderContext =createContext()

export const OrderProvider = ({children})=> {
    const { cart } = useContext(CartContext);
    const [ order , setOrder] = useState([]);
    const [ dataOrder, setDataOrder ] = useState({
        name:"",
        surname:"",
        email:"",
        phone:0,
        items:cart
    });
    const saveOrder = (element) =>{
        setOrder(element)
    }
    const saveDataOrder = (element) =>{
        setDataOrder(element)
    }
    return(
        <OrderContext.Provider value={ { order , saveOrder, dataOrder , setDataOrder } }>
            {children}
        </OrderContext.Provider>
    )
}