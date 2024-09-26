import { Box, Input, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
	const URL =
		"https://form-b4c45-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";
	const userName = useRef();
	const password = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		let obj = {
			userName: userName.current.value,
			password: password.current.value,
		};
		axios.post(URL, obj).then(() => {
			alert("Signed in successfully");
			navigate("/login");
		});
	};
	return (
		<div>
			<Text textAlign="center" as="b">
				Signup
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
