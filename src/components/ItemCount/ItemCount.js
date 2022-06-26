import React, {useState} from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom";


const MySwal = withReactContent(Swal)
export default function ItemCount({stock, initial, item}) {
    const [ cant, setCant ] = useState(0);
    const [count, setCount] = useState(initial);
    
    const onAdd = ( cantidad, item )=>{
        setCant(cantidad)
        console.log( item );
        
        MySwal.fire({
            title: <p>Su producto se agrego correctamente al carrito</p>,
            icon: "success"
        })
    }

    function suma() {
            if ((count !== stock) && (count >= initial) ) {
                setCount(count+1)
            } else {
                MySwal.fire({
                    title: <p>La cantidad para agregar no puede pasar el stock</p>,
                    icon: "warning"
                })
            }   
    }
    function resta() {
        if ((count !== initial) && (count > initial) ) {
            setCount(count-1)
        } else {
            MySwal.fire({
                title: <p>La cantidad mínima para agregar al carrito es 1</p>,
                icon: "warning"
            }) 
        } 
    }
    return (
        <div className="contenedor__item__count">
            
            {
            cant === 0 
            ? <div className="itemCount">
                <button className="botonResta button" onClick={resta}>-</button>
                <span className="contador">{count} </span>
                <button className="botonSuma button" onClick={suma}>+</button>
                <button className='button' onClick={ ()=>onAdd( count, item ) } >Agregar al Carrito</button>
            </div>
            : <div className="container__boton__comprar">
                <Link to="/cart" className="button botonComprar" >Ir al Carrito</Link>
            </div>
            }
            
        </div>
        
    )
}