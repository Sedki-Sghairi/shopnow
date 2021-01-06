import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetailScreen = () => {
	return (
		<View style={styles.container}>
			<Text>hi from detail screen</Text>
		</View>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
