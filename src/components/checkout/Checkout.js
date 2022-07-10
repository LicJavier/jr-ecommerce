import { useContext } from "react"
import { OrderContext } from "../../context/OrderContext";
import "./styles.css"

export default function Checkout() {
    const { order , dataOrder } = useContext(OrderContext);
    console.log(dataOrder)
    return(
        <div className="container__checkout">
        <h3>Gracias por tu compra {dataOrder.name}</h3>
        <h4>Tu pedido ya se encuentra en proceso de preparación</h4>
        <h5>Tus datos</h5>
        <ul>
            <li>Pedido: {order.id}</li>
            <li>Nombre: {dataOrder.name}</li> 
            {
                dataOrder.items.map( producto => (
                    <div key={producto.name}>
                        <li>{producto.name}</li> 
                        <li>Cant: {producto.cantidad}</li>
                    </div>
                ))
            }
            <li>Precio Final: ${dataOrder.total}</li>
        </ul>
    </div>
    )
}