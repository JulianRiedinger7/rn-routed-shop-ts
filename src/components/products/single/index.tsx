import { View, Text } from 'react-native';
import React from 'react';
import { Item } from '../../../../types';

interface Props {
	item: Item;
}

const Product = ({ item }: Props) => {
	return (
		<View>
			<Text>{item.title}</Text>
			<Text>{item.image}</Text>
			<Text>{item.price}</Text>
		</View>
	);
};

export default Product;
