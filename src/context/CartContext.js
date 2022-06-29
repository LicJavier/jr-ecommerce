import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CartContext =createContext()
const MySwal = withReactContent(Swal)

export const CartProvider = ({children})=> {
    
    const [ cart, setCart] = useState([]);

    const addItem = ( item, cantidad)=>{
        console.log(isInCart(item.id))
        if(cart.length === 0){
            setCart(
                [{...item, cantidad }]
            )
            MySwal.fire({
                title: <p>Su producto se agrego correctamente al carrito</p>,
                icon: "success"
            })
        } else if(isInCart(item.id) ) {
            MySwal.fire({
                title: <p>Este producto ya se agrego al carrito</p>,
                icon: "warning"
            })
        }else{
            setCart(
                [...cart,{...item, cantidad }]
            )
        }
    }

    const removeItem = (id, item)=>{
        console.log(id)
        let arrayNuevo = cart;
        let eliminable = cart.indexOf(item);
        if (true) {
            arrayNuevo.splice(eliminable,1)
            setCart(arrayNuevo)
            console.log("se removio con exito")
            // no se actualiza el cart (utilizar useEfect(?))
        }
    }
    
    const checkContext = ()=> {
        console.log("chequeando el context")
    }

    const clear = ()=>{
        setCart([])
        console.log(cart)
    }

    function isInCart(id) {
        return cart.some( (objeto)=> objeto.id === id);
    }
    return(
        <CartContext.Provider value={{ cart, checkContext, addItem, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}