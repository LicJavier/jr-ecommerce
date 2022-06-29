import ItemCount from "../itemCount/ItemCount";
import "./countContainer.css"

export default function CountContainer({ stock, item }) {

    return (
        <div className="container-fluid">
            <ItemCount stock={ stock } initial={ 1 } item={ item } />
        </div>
    )
}