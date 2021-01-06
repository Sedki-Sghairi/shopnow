import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
const ProductDetailScreen = ({ navigation, route }) => {
	const productId = route.params.productId;
	const products = useSelector((state) => state.products.availableProducts);
	const myProduct = products.find((x) => x.id === productId);
	return (
		<View style={styles.container}>
			<Text>{productId}</Text>
			<Text>{myProduct.title}</Text>
		</View>
	);
};
ProductDetailScreen.navigationOptions = ({ route }) => {
	return {
		headerTitle: route.params.title
	};
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
