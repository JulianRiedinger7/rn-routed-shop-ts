import { View, FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { styles } from './styles';
import OrderItem from '../item';
import { CartItemProps } from '../../cart/list';

export const orders = [
	{
		id: 1,
		date: 1605898400000,
		total: 10000,
		items: [
			{
				id: 1,
				categoryId: 1,
				title: 'Pan de yema',
				description: 'clasico y delicioso pan de yema',
				weight: '60gr',
				price: 1.0,
				quantity: 3,
			},
			{
				id: 5,
				categoryId: 3,
				title: 'Pan de trigo',
				description: 'clasico y delicioso pan de trigo',
				weight: '60gr',
				price: 1.0,
				quantity: 2,
			},
			{
				id: 6,
				categoryId: 3,
				title: 'Pan de hamburguesa',
				description: 'clasico y delicioso pan de hamburguesa',
				weight: '60gr',
				price: 1.0,
				quantity: 5,
			},
		],
	},
	{
		id: 2,
		date: 1705898400000,
		total: 12000,
		items: [
			{
				id: 1,
				categoryId: 1,
				title: 'Pan de yema',
				description: 'clasico y delicioso pan de yema',
				weight: '60gr',
				price: 1.0,
				quantity: 6,
			},
			{
				id: 5,
				categoryId: 3,
				title: 'Pan de trigo',
				description: 'clasico y delicioso pan de trigo',
				weight: '60gr',
				price: 1.0,
				quantity: 5,
			},
			{
				id: 6,
				categoryId: 3,
				title: 'Pan de hamburguesa',
				description: 'clasico y delicioso pan de hamburguesa',
				weight: '60gr',
				price: 1.0,
				quantity: 3,
			},
		],
	},
];

export type OrderItemProps = {
	id: number;
	date: number;
	total: number;
	items: CartItemProps[];
};

const OrdersList = () => {
	const renderItem: ListRenderItem<OrderItemProps> = ({ item }) => (
		<OrderItem item={item} />
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
			/>
		</View>
	);
};

export default OrdersList;
