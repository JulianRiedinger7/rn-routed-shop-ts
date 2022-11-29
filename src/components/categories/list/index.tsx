import {
	View,
	FlatList,
	ListRenderItem,
	StyleSheet,
	Dimensions,
} from 'react-native';
import React from 'react';
import { useDataFetch } from '../../../hooks/useDataFetch';
import Category from '../single';

const CategoriesList = () => {
	const { data } = useDataFetch('https://fakestoreapi.com/products/categories');

	const renderItem: ListRenderItem<string> = ({ item }) => (
		<Category item={item} />
	);

	return (
		<View style={styles.container}>
			<FlatList data={data} renderItem={renderItem} keyExtractor={(i) => i} />
		</View>
	);
};

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: height * 0.2,
	},
});

export default CategoriesList;
