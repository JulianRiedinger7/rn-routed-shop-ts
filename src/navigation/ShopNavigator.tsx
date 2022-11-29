import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Categories, Detail, Products } from '../screens';

export type ShopStackParams = {
	Categories: undefined;
	Products: { category: string };
	Detail: undefined;
};

const Stack = createNativeStackNavigator<ShopStackParams>();

const ShopNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Categories">
			<Stack.Screen name="Categories" component={Categories} />
			<Stack.Screen
				name="Products"
				component={Products}
				options={({ route }) => ({
					title: route.params.category.toUpperCase(),
				})}
			/>
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};

export default ShopNavigator;
