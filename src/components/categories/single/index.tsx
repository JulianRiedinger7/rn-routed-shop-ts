import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ShopStackParams } from '../../../navigation/ShopNavigator';

interface Props {
	item: string;
}

const Category = ({ item }: Props) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<ShopStackParams, 'Categories'>>();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate('Products', { category: item })}
		>
			<Text style={styles.title}>{item}</Text>
		</TouchableOpacity>
	);
};

export default Category;
