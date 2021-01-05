import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ProductReducer from './store/reducers/productReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';

const rootReducer = combineReducers({
	products: ProductReducer
});
const store = createStore(rootReducer);
const Stack = createStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="ProductsOverview" component={ProductOverviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
