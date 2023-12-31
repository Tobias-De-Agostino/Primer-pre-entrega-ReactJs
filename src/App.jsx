import "./App.css";
import CartView from "./componentes/CartView/CartView";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";
import { CartProvider } from "./componentes/context/CartContext";
import { UserProvider } from "./componentes/context/UserContext";
import { Contador } from "./componentes/ejemplos/renderprops/Clicker";
// import Prendas from "./componentes/ejemplos/renderprops/Prendas";
// import Posts from "./ejemplos/Posts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Contador />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />

            {/* <Route path="/prendas" element={<Prendas />} /> */}
            {/* <Route path="/posts" element={<Posts />} /> */}

            <Route path="/not-found" element={<h2>Not found</h2>} />
            <Route path="*" element={<Navigate to={"/not-found"} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;