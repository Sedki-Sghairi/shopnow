import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';

const CartScreen = (props) => {
	const items = useSelector((state) => {
		const myItems = [];
		for (const key in state.cart.items) {
			myItems.push({
				productId: key,
				productTitle: state.cart.items[key].productTitle,
				productPrice: state.cart.items[key].productPrice,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum
			});
		}
		return myItems;
	});
	const total = useSelector((state) => state.cart.totalAmount);
	return (
		<View style={styles.screen}>
			<View style={styles.summary}>
				<Text style={styles.summaryText}>
					Total: <Text style={styles.ammount}>${total.toFixed(2)}</Text>
					<Button color="#388e3c" title="Place Order" disabled={items.length === 0 ? true : false} />
				</Text>
			</View>
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({
	screen: {
		margin: 20
	},
	summary: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'white'
	},
	summaryText: {
		fontSize: 18
	},
	ammount: {
		color: Colors.accent
	}
});
