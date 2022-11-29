import React from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	Image,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ShopStackParams } from '../../navigation/ShopNavigator';
import { useDataFetch } from '../../hooks/useDataFetch';

const ProductDetail = () => {
	const router = useRoute<RouteProp<ShopStackParams, 'Detail'>>();
	const { data, loading } = useDataFetch(
		`https://fakestoreapi.com/products/${router.params.productId}`
	);

	if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

	return (
		<View style={styles.container}>
			{data ? (
				<>
					<Image source={{ uri: data['image'] }} style={styles.image} />
					<Text style={styles.title}>{data['title']}</Text>
					<Text style={styles.description}>{data['description']}</Text>
					<View style={styles.bottomContainer}>
						<Text style={styles.price}>${data['price']}</Text>
						<TouchableOpacity style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Buy Now!</Text>
						</TouchableOpacity>
					</View>
				</>
			) : null}
		</View>
	);
};

export default ProductDetail;
