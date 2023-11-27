import { useState } from "react";
import "./ItemCount.css"

function ItemCount ({stock, initial, Cart}){

    const [count, setCount] = useState(0);
    
    function increment(){
        if(count < stock){
        setCount(count + 1);
        }
    }

    function decrement(){
        if(count > 0){
        setCount(count - 1);
        }
    }

    function Cart(){
        console.log("Items agregados: " + count)
        setCount(count - count)
    }

    return(
    <div>
        <div className="card-content container centered">
            <button onClick={decrement} className="button is-success">-</button>
            <span>{count}</span>
            <button onClick={increment} className="button is-success">+</button>
        </div>
        <div className="container centered">
            <button onClick={()=> Cart(count)} disabled={!stock} className="button is-success">Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount;