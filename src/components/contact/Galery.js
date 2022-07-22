import "./style.css";

export default function Galery() {
    
    return (
        <div className="container__galery">
            <div className="galery__pics">
                <img src="../images/feria1.jpeg"/>
                <img src="../images/feria2.jpg"/>
            </div>
            <div className="galery__pics">
                <img src="../images/feria3.jpg"/>
                <img src="../images/feria4.jpeg"/>
            </div>
        </div>
    )
}