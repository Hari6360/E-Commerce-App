import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { isLogged, setIsLogged } = useContext(AuthContext);
	const { flag, user } = isLogged;
	let navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	const handleLogout = () => {
		setIsLogged({ flag: false, user: "" });
		navigate("/login");
	};

	return (
		<Flex
			justify="space-between"
			border="1px"
			bgGradient="linear(red,black)"
			p="2"
			alignItems="center">
			<Button onClick={() => handleNavigate("/")}>Home</Button>
			<Button onClick={() => handleNavigate("/cart")}>Cart</Button>
			<Flex>
				{flag ? (
					<>
						<Text bgColor="white" p="2" border="5" mr="2">
							Hi, {user}
						</Text>
						<Button onClick={handleLogout}>Log Out</Button>
					</>
				) : (
					<>
						<Button onClick={() => handleNavigate("/login")}>Log In</Button>
						<Button onClick={() => handleNavigate("/signup")}>Sign Up</Button>
					</>
				)}
			</Flex>
		</Flex>
	);
};
