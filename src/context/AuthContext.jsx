import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState({
		flag: false,
		user: "Hari",
	});
	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthContext.Provider>
	);
};
