import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartAction';
const ProductOverviewScreen = ({ navigation }) => {
	const products = useSelector((state) => state.products.availableProducts);
	const dispatch = useDispatch();

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
					onAddToCart={() => {
						dispatch(cartActions.addToCart(itemData.item));
					}}
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
