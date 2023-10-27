//import React, {useEffect} from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
import Empresa from "./components/Empresa";
import Contacto from "./components/Contacto";
import Checkout from "./components/Cheackout/Checkout";

function App() {
	// useEffect(() => {
	// 	const colectionProductos = collection(db, "productos")
	// 	products.map((item) => addDoc(colectionProductos, item))
	// },[]) // CARGA DE PRODUCTOS
	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route path="/empresa" element={<Empresa />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;
