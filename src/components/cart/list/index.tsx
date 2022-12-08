import {
	View,
	FlatList,
	ListRenderItem,
	TouchableOpacity,
	Text,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import CartItem from '../item';

export const cart = [
	{
		id: 1,
		categoryId: 1,
		title: 'Pan Bagguette',
		description: 'clasico pan frances',
		weight: '400gr',
		price: 600,
		quantity: 2,
	},
	{
		id: 2,
		categoryId: 1,
		title: 'Pan de molde',
		description: 'clasico pan de molde',
		weight: '400gr',
		price: 800,
		quantity: 3,
	},
];

export type CartItemProps = {
	id: number;
	categoryId: number;
	title: string;
	description: string;
	weight: string;
	price: number;
	quantity: number;
};

/* LUEGO BORRAR TANTO EL TIPO COMO EL CART HARDCODEADO */

const CartList = () => {
	const renderItem: ListRenderItem<CartItemProps> = ({ item }) => (
		<CartItem item={item} />
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={cart}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
			/>

			<View style={styles.bottomContainer}>
				<TouchableOpacity style={styles.button}>
					<Text>Confirmar</Text>
					<View style={styles.rightContainer}>
						<Text style={styles.total}>Total</Text>
						<Text style={styles.price}>$12000</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CartList;
