import React from 'react';
import { FlatList, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../../components/ui/HeaderButton';

const OrdersScreen = ({ navigation }) => {
	const orders = useSelector((state) => state.orders.orders);

	navigation.setOptions({
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Home"
					iconName={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
					onPress={() => {
						navigation.navigate('ProductsOverview');
					}}
				/>
			</HeaderButtons>
		)
	});

	return (
		<FlatList
			data={orders}
			keyExtractor={(x) => x.id.toString()}
			renderItem={(itemData) => <Text>${itemData.item.totalAmount}</Text>}
		/>
	);
};

export default OrdersScreen;

const styles = StyleSheet.create({});
