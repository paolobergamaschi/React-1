import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id, name, img, category, descripiton, price, stock}) =>{
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
            </footer>
        </article>
        </div>
    </div>
    )
}

export default ItemDetail;