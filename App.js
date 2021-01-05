import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductReducer from './store/reducers/productReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
	products: ProductReducer
});
const store = createStore(rootReducer);
export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Text>mrigel</Text>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
