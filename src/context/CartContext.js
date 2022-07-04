import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CartContext =createContext()
const MySwal = withReactContent(Swal)

export const CartProvider = ({children})=> {
    
    const [ cart, setCart] = useState([]);

    const addItem = ( item, cantidad)=>{
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

    const removeItem = (id)=>{
        let cartNuevo = cart.filter((item)=> item.id !== id);
        setCart(cartNuevo) ;
    }
    
    const checkContext = ()=> {
        console.log("chequeando el context")
    }

    const clear = ()=>{ 
        setCart([])
        console.log(cart)
    }
    function totalPrice(){
        let total = 0;
        let suma = 0
        cart.forEach( item => {
          total += suma + parseInt((item.price * item.cantidad));
        })
        console.log(total)
        return total;
    }
    function isInCart(id) {
        return cart.some( (objeto)=> objeto.id === id);
    }
    return(
        <CartContext.Provider value={{ cart, checkContext, addItem, clear, removeItem, isInCart , totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}