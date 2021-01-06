import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
const ProductDetailScreen = ({ navigation, route }) => {
	const productId = route.params.productId;
	const products = useSelector((state) => state.products.availableProducts);
	const myProduct = products.find((x) => x.id === productId);
	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: myProduct.imageUrl }} />
			<View style={styles.btn}>
				<Button color="#1b5e20" title="Add to Cart" onPress={() => console.log('adding to cart')} />
			</View>
			<Text style={styles.price}>${myProduct.price.toFixed(2)}</Text>
			<Text style={styles.desc}>{myProduct.description}</Text>
		</ScrollView>
	);
};
ProductDetailScreen.navigationOptions = ({ route }) => {
	return {
		headerTitle: route.params.title
	};
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	price: {
		color: '#888',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 20
	},
	desc: {
		fontSize: 18,
		textAlign: 'left',
		paddingHorizontal: 20
	},
	btn: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10
	}
});
