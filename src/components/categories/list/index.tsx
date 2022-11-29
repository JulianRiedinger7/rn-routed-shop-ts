import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useDataFetch } from '../../../hooks/useDataFetch';
import { styles } from './styles';
import Category from '../single';

const CategoriesList = () => {
	const { data } = useDataFetch('https://fakestoreapi.com/products/categories');

	const renderItem: ListRenderItem<string> = ({ item }) => (
		<Category item={item} />
	);

	return (
		<SafeAreaView style={styles.viewContainer}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(i) => i}
				contentContainerStyle={styles.container}
			/>
		</SafeAreaView>
	);
};

export default CategoriesList;
