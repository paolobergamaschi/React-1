import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(){
    return (
    <div className="App">
        <div>
            <NavBar/>
        </div>
        <div>
            <ItemListContainer greeting={'Bienvenido a Mundo Camisetas'}/>
        </div>
    </div>
    )
}

export default App;