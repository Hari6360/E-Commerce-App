import { createContext, useState } from "react";
import { Product } from "../components/Product";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prev) => {
			const existingItem = prev.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prev; // stops adding a duplicate
			}
			return [...prev, item];
		});
	};

	const removeCart = (id) => {
		setCart((prev) => {
			const index = prev.findIndex((item) => item.id == id);
			if (index === -1) return prev;

			const newCart = [...prev];
			newCart.splice(index, 1);
			return newCart;
		});
	};
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};
