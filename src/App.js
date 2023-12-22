import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Actuales from './pages/Actuales';
import Retro from './pages/Retro';
import Contacto from './pages/Contacto';
import Layout from './pages/Layout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

function App(){
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
            <Routes>
            <Route path='/' element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/Actuales' element={<Actuales/>}/>
                <Route path='/Retro' element={<Retro/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
            </CartProvider>
        </BrowserRouter>
        </div>
    )
}

export default App;