import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Text,
	Box,
	Button,
	Divider,
	Grid,
	Heading,
	Stack,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Home = () => {
	let URL =
		"https://form-b4c45-default-rtdb.asia-southeast1.firebasedatabase.app/Products.json";

	let [data, setData] = useState([]);
	let { isLogged } = useContext(AuthContext);
	let navigate = useNavigate();
	let { addToCart } = useContext(CartContext);

	useEffect(() => {
		axios.get(URL).then((res) => {
			setData(res.data);
		});
	}, []);
	const handleCartClick = (e,product) => {
		e.stopPropagation();
		if (!isLogged.flag) {
			navigate("/login");
		} else {
			addToCart({ id: product.id, ...product });
		}
	};

	const handleProductClick = (id) => {
		navigate(`/Product/${id}`);
	};

	return (
		<Box>
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{Object.entries(data).map(([id, ele]) => {
					return (
						<Card maxW="sm" key={id} onClick={() => handleProductClick(id)}>
							<CardBody>
								<Image src={ele.image} alt={ele.name} borderRadius="lg" />
								<Stack mt="6" spacing="3">
									<Heading size="md">{ele.name}</Heading>
									<Text color="blue.600" fontSize="2xl">
										{ele.price}
									</Text>
								</Stack>
							</CardBody>
							<Divider />
							<CardFooter>
								<Button
									variant="ghost"
									colorScheme="blue"
									onClick={(event) => handleCartClick(event, { id, ...ele })}>
									Add to cart
								</Button>
							</CardFooter>
						</Card>
					);
				})}
			</Grid>
		</Box>
	);
};
