import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const ProductItem = (props) => {
	return (
		<View style={styles.product}>
			<Image style={{ width: '100%', height: '60%' }} source={{ uri: props.image }} />
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.price}>${props.price.toFixed(2)}</Text>
			<View style={styles.container}>
				<Button color="#757575" title="View Details" onPress={props.onViewDetail} />
				<Button color="#546e7a" title="Add to Cart" onPress={props.onAddToCart} />
			</View>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	product: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: '#fff',
		height: 300,
		margin: 20,
		overflow: 'hidden'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	title: {
		fontSize: 18,
		margin: 4,
		textAlign: 'center'
	},
	price: {
		fontSize: 14,
		color: '#888',
		textAlign: 'center',
		paddingBottom: 5
	}
});
