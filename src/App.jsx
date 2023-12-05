import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  const greetingMessage = "¡Bienvenidoa mi tienda!";

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greetingMessage}/>
    </>
  )
}

export default App
