import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import type { Item } from '../../../../types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ShopStackParams } from '../../../navigation/ShopNavigator';
import { useDataFetch } from '../../../hooks/useDataFetch';
import Product from '../single';
import { styles } from './styles';

const ProductsList = () => {
	const route = useRoute<RouteProp<ShopStackParams, 'Products'>>();
	const { data, loading } = useDataFetch(
		`https://fakestoreapi.com/products/category/${route.params.category}`
	);

	const renderItem: ListRenderItem<Item> = ({ item }) => (
		<Product item={item} />
	);

	return (
		<>
			{loading ? (
				<ActivityIndicator size="large" style={styles.loader} />
			) : (
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			)}
		</>
	);
};

export default ProductsList;
