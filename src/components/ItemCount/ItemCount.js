import {useState} from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export default function ItemCount({stock, initial}) {
    
    const [count, setCount] = useState(initial);
    
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
        <div className="itemCount">
            <button className="botonResta button" onClick={resta}>-</button>
            <span className="contador">{count} </span>
            <button className="botonSuma button" onClick={suma}>+</button>
        </div>
    )
}