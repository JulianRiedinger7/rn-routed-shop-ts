import React from 'react';
import { View, Text } from 'react-native';
import { CartItemProps } from '../list';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../constants/theme/colors';

interface Props {
	item: CartItemProps;
}

const CartItem = ({ item }: Props) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
				<Text style={styles.price}>${item.price}</Text>
			</View>

			<View>
				<Ionicons name="trash-sharp" size={30} color={colors.primary} />
			</View>
		</View>
	);
};

export default CartItem;
