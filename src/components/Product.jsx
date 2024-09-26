import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const URL = `https://form-b4c45-default-rtdb.asia-southeast1.firebasedatabase.app/Products/${id}.json`;
	let navigate = useNavigate();
	const { addToCart } = useContext(CartContext);
	const { isLogged } = useContext(AuthContext);

	useEffect(() => {
		axios
			.get(URL)
			.then((res) => {
				setProduct(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	// const handleCart = (e) => {
	// 	e.stopPropagation();
	// 	if (!isLogged.flag) {
	// 		navigate("/login");
	// 	} else {
	// 		addToCart({ id, ...product });
	// 	}
	// };
	const handleCart = (e) => {
		e.stopPropagation();
		if (!isLogged.flag) {
			navigate("/login");
		} else {
			console.log("Adding to cart:", { id: product.id, ...product }); // Log the item being added
			addToCart({ id: product.id, ...product });
		}
	};

	return (
		<Center minH="100vh" bg="gray.50">
			{product ? (
				<Box
					maxW="40vw"
					bg="white"
					// border="1px"
					borderRadius="2xl"
					boxShadow="lg"
					overflow="hidden"
					padding="5"
					mx="auto"
					mt="10">
					<Image
						src={product.image}
						borderRadius="md"
						w="100%"
						h="400px"
						objectFit="contain"
						mb="6"
					/>
					<Stack spacing="4" align="center" justify="center">
						<Heading as="h3" size="xl" color="teal.600" textAlign="center">
							{product.name}
						</Heading>
						<Text fontSize="lg" color="gray.700" textAlign="center">
							{product.description}
						</Text>
						<Text
							fontWeight="bold"
							fontSize="2xl"
							color="blue.500"
							textAlign="center">
							{product.price}
						</Text>
					</Stack>
					<Button
						variant="ghost"
						colorScheme="blue"
						onClick={(event) => handleCart(event, { id, ...product })}>
						Add to cart
					</Button>
				</Box>
			) : (
				<Box>Loading product details...</Box>
			)}
		</Center>
	);
};
