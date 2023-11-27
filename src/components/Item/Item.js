import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id,name,img,price,stock}) => {
    return(
    <div className="column is-one-third">
        <div className="box card has-background-primary">
            <article className="box">
                <header className="title is-4">
                    <h2>
                        {name}
                    </h2>
                </header>
                <div className="card-image has-background-success">
                    <picture>
                        <img src={img} alt={name} className=""/>
                    </picture>
                </div>
            <section className="card-content">
                <div className="content">
                <p className="title is-4">
                    Precio: ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
                </div>
            </section>
            <footer>
                <Link to={`/item/${id}`} className="button is-success">Ver Detalles </Link>
                <ItemCount initial={1} stock={stock} Cart={(quantity) => console.log('Items agregados: ' , quantity)}/>
            </footer>
        </article>
    </div>
    </div>
    )
}

export default Item;