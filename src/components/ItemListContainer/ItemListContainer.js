import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts , getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import {getDocs, collection , query , where} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";



const ItemListContainer = ({ greeting }) => {
    const[products, setProducts] = useState([])
    const {loading, setLoading} = useState(true)

    const {categoryId} = useParams()


    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId
        ? query(collection(db,'products', where('category','==', categoryId)))
        : collection(db, 'products')

        getDocs(collectionRef)
        .then(response => {
            const procutsAdapted = response.docs.map(doc=>{
                const data= doc.data()
                return{id: doc.id,...data}
            })
            setProducts(procutsAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    
    })

    return(
        <div className="container has-text-centered ">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;