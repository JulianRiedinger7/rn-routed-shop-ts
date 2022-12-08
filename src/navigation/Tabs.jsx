import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import ShopNavigator from './ShopNavigator';
import { colors } from '../constants/theme/colors';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 60,
				},
				tabBarInactiveTintColor: colors.secondaryDark,
				tabBarActiveTintColor: colors.text,
				tabBarLabelStyle: {
					fontWeight: 'bold',
					fontSize: 13,
				},
			}}
		>
			<BottomTab.Screen
				name="ShopTab"
				component={ShopNavigator}
				options={{
					title: 'Shop',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={25}
							color={focused ? colors.primary : colors.secondaryDark}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="CartTab"
				component={CartNavigator}
				options={{
					title: 'Cart',
					tabBarBadge: 3,
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'cart' : 'cart-outline'}
							size={25}
							color={focused ? colors.primary : colors.secondaryDark}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="OrdersTab"
				component={OrdersNavigator}
				options={{
					title: 'Orders',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'albums' : 'albums-outline'}
							size={25}
							color={focused ? colors.primary : colors.secondaryDark}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default Tabs;
