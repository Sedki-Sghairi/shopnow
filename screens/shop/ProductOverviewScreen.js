import * as React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartAction';
import CustomHeaderButton from '../../components/ui/HeaderButton';

const ProductOverviewScreen = ({ navigation }) => {
	const products = useSelector((state) => state.products.availableProducts);
	const dispatch = useDispatch();
	React.useLayoutEffect(
		() => {
			navigation.setOptions({
				headerRight: () => (
					<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
						<Item
							title="Cart"
							iconName={Platform.OS === 'android' ? 'cart-outline' : 'ios-cart'}
							onPress={() => {
								navigation.navigate('cart');
							}}
						/>
					</HeaderButtons>
				)
			});
		},
		[ navigation ]
	);
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

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
