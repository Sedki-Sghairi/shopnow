import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ProductReducer from './store/reducers/productReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';
import { Platform } from 'react-native';
import Colors from './constants/Colors';
import ProductDetailScreen from './screens/shop/ProductDetailScreen';
import CartScreen from './screens/shop/CartScreen';

const rootReducer = combineReducers({
	products: ProductReducer
});
const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="ProductsOverview">
					<Stack.Screen
						name="ProductsOverview"
						component={ProductOverviewScreen}
						options={{
							title: 'Products',
							headerStyle: {
								backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
							},
							headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
							headerTitleStyle: {
								fontWeight: 'bold'
							}
						}}
					/>
					<Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
					<Stack.Screen name="cart" component={CartScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
