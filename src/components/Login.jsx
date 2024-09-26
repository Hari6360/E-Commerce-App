import { Box, Input, Text } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
	const URL =
		"https://form-b4c45-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";
	const userName = useRef();
	const password = useRef();
	const navigate = useNavigate();
	const { isLogged, setIsLogged } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		let obj = {
			userName: userName.current.value,
			password: password.current.value,
		};
		axios.get(URL).then((res) => {
			let products = res.data;
			let users = Object.entries(products);

			let filterData = users.filter(([id, ele]) => {
				return ele.userName == obj.userName && ele.password == obj.password;
			});
			if (filterData.length === 0) {
				alert("Wrong Credentials");
			} else {
				setIsLogged({
					flag: true,
					user: filterData[0][1].userName,
				});
				navigate("/");
			}
		});
	};
	return (
		<div>
			<Text textAlign="center" as="b">
				Login
			</Text>
			<Box>
				<form onSubmit={handleSubmit}>
					<Input
						ref={userName}
						type="text"
						placeholder=" Enter UserName"
						size="md"
					/>
					<Input
						ref={password}
						type="text"
						placeholder="Enter your Password "
						size="md"
					/>
					<Input type="submit" />
				</form>
			</Box>
		</div>
	);
};
