import "./styles.css"

export default function Nosotros() {
    return (
        <main className="main__nosotros">
            <section className="section__nosotros">
                <article className="article__nosotros">
                    <h3 className="tittle__nosotros">Nosotros</h3>
                    <p>Mi nombre es Natalia y comencé con este emprendimiento hace 6 años, realizo mandalas a pedido, además recorremos las distintas ferias vecinales con los productos en stock.</p>
                </article>
                <article className="nosotros__pics">
                    <img src="../images/feria1.jpg"/>
                    <img src="../images/feria2.jpg"/>
                </article>
            </section>
        </main>
    )
}