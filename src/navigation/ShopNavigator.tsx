import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Categories, Detail, Products } from '../screens';

const Stack = createNativeStackNavigator();

export type ShopStackParams = {
	Categories: undefined;
	Products: undefined;
	Detail: undefined;
};

const ShopNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Categories">
			<Stack.Screen name="Categories" component={Categories} />
			<Stack.Screen name="Products" component={Products} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};

export default ShopNavigator;
