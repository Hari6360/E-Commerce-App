import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<CartProvider>
					<Router>
						<App />
					</Router>
				</CartProvider>
			</AuthProvider>
		</ChakraProvider>
	</StrictMode>
);
