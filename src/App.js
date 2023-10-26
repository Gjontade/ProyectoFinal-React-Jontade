//import React, {useEffect} from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
//import Checkout

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
							element={<ItemListContainer greeting={"¡BIENVENIDOS!"} />}
						/>
						<Route path="/empresa" element={<h1>EMPRESA</h1>} />
						<Route path="/contacto" element={<h1>CONTACTO</h1>} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
						{/* <Route path="/checkout" element={<Checkout />} /> */}
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;
