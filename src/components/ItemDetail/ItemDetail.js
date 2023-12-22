import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, descripiton, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOndAdd =(quantity) => {
        setQuantityAdded(quantity)
    const item={
        id,name,price
    }
    addItem(item,quantity)
}

    return(
    <div className="column is-half is-offset-one-quarter">
        <div className="box card has-background-primary">
        <article className="box">
            <header className="title is-4">
                <h2>
                    {name}
                </h2>
            </header>
            <div className="card-image has-background-success">
                <picture>
                    <img src={img} alt={name}/>
                </picture>
            </div>
            <section className="card-content">
                <div  className="content">
                    <p className="title is-4">
                        Categoria : {category}
                    </p>
                    <p>
                        Descripcion: {descripiton}
                    </p>
                    <p>
                        Precio: ${price}
                    </p>
                </div>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOndAdd}/>
                    )
                }
            </footer>
        </article>
        </div>
    </div>
    )
}

export default ItemDetail;