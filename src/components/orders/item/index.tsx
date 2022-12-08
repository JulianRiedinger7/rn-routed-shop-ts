import React from 'react';
import { View, Text } from 'react-native';
import { OrderItemProps } from '../list';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../constants/theme/colors';

interface Props {
	item: OrderItemProps;
}

const formatDate = (time: number) => {
	const date = new Date(time);
	return date.toLocaleDateString();
};

const OrderItem = ({ item }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.date}>{formatDate(item.date)}</Text>
				<Text style={styles.total}>${item.total}</Text>
			</View>
			<Ionicons name="trash-sharp" size={25} color={colors.primary} />
		</View>
	);
};

export default OrderItem;
