import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Item } from '../../../../types';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface Props {
	item: Item;
}

const Product = ({ item }: Props) => {
	const [quantity, setQuantity] = useState<number>(1);

	const onHandlePress = (instruction: string) => {
		if (instruction === 'decrement' && quantity === 1) return;
		if (instruction === 'decrement') {
			setQuantity((prevQuantity) => prevQuantity - 1);
		} else setQuantity((prevQuantity) => prevQuantity + 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: item.image }} style={styles.image} />
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<View style={styles.content}>
					<View style={styles.buttonsContainer}>
						<AntDesign
							name="minuscircleo"
							size={30}
							color="white"
							onPress={() => onHandlePress('decrement')}
						/>
						<Text style={styles.count}>{quantity}</Text>
						<AntDesign
							name="pluscircleo"
							size={30}
							color="white"
							onPress={() => onHandlePress('increment')}
						/>
					</View>
					<Text style={styles.price}>
						${parseInt(item.price) * quantity || item.price}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Product;
