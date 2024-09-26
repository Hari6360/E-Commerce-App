import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";

export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</>
	);
};
