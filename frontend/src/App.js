import './App.css';
import Carrito from "./Components/Carrito";
import { Formulario } from './Components/Formulario';

function App() {
  return (
    <div className="App">
      <main  className="App-header">
        <h1>Entrega final</h1>
        <h3>Anadir al carrito</h3>
        <Carrito></Carrito>
        <Formulario></Formulario>
      </main>
    </div>
  );
}

export default App;
