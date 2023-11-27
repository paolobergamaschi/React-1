import Item from "../Item/Item";

const ItemList = ({products}) => {
    return(
        <div className="columns is-multiline">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;