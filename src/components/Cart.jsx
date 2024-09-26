// src/components/Cart.js
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const Cart = () => {
	const { cart, removeCart, clearCart } = useContext(CartContext);

	const handleRemove = (id) => {
		removeCart(id);
	};
	const handleClear = () => {
		clearCart([]);
	};
	return (
		<Box padding="4">
			<Heading>Your Cart</Heading>
			<Button onClick={handleClear}>Clear Cart</Button>
			{cart.length === 0 ? (
				<Text>Your cart is empty.</Text>
			) : (
				<Stack spacing={4}>
					{cart.map((item) => (
						<Box key={item.id} borderWidth="1px" borderRadius="lg" padding="4">
							<Image
								src={item.image}
								borderRadius="md"
								w="100%"
								h="400px"
								objectFit="contain"
								mb="6"
							/>
							<Stack spacing="4" align="center" justify="center">
								<Heading as="h3" size="xl" color="teal.600" textAlign="center">
									{item.title}
								</Heading>

								<Text
									fontWeight="bold"
									fontSize="2xl"
									color="blue.500"
									textAlign="center">
									$ {item.price}
								</Text>
								<Button onClick={() => handleRemove(item.id)}>Remove</Button>
							</Stack>
						</Box>
					))}
				</Stack>
			)}
		</Box>
	);
};
