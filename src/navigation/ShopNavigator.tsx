import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { colors } from '../constants/theme/colors';
import { Categories, Detail, Products } from '../screens';

export type ShopStackParams = {
	Categories: undefined;
	Products: { category: string };
	Detail: { title: string; productId: number };
};

const Stack = createNativeStackNavigator<ShopStackParams>();

const ShopNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.primary,
				},
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerBackTitle: '',
			}}
		>
			<Stack.Screen name="Categories" component={Categories} />
			<Stack.Screen
				name="Products"
				component={Products}
				options={({ route }) => ({
					title: route.params.category.toUpperCase(),
				})}
			/>
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={({ route }) => ({
					title: route.params.title,
				})}
			/>
		</Stack.Navigator>
	);
};

export default ShopNavigator;
