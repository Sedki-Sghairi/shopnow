import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = ({ navigation }) => {
	const products = useSelector((state) => state.products.availableProducts);

	return (
		<FlatList
			data={products}
			renderItem={(itemData) => (
				<ProductItem
					onViewDetail={() =>
						navigation.navigate('ProductDetail', {
							productId: itemData.item.id,
							title: itemData.item.title
						})}
					onAddToCart={() => navigation.navigate('cart')}
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
				/>
			)}
		/>
	);
};

ProductOverviewScreen.navigationOptions = {
	headerTitle: 'All Products'
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
