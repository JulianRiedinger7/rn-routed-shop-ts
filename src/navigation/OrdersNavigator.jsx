import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/theme/colors';
import { Orders } from '../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Orders"
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
			<Stack.Screen name="Orders" component={Orders} />
		</Stack.Navigator>
	);
};

export default OrdersNavigator;
