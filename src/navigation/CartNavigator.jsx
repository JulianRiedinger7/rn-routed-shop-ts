import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/theme/colors';
import { Cart } from '../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Cart"
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
			<Stack.Screen name="Cart" component={Cart} />
		</Stack.Navigator>
	);
};

export default CartNavigator;
