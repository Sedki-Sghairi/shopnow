import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {
	return (
		<View style={styles.cartItem}>
			<Text style={styles.itemData}>
				<Text style={styles.qty}>{props.qty} </Text>
				<Text style={styles.title}>{props.title}</Text>
			</Text>
			<View style={styles.itemData}>
				<Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
				<TouchableOpacity style={styles.delete} onPress={props.onRemove}>
					<Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color="red" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	cartItem: {
		padding: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		alignItems: 'center'
	},
	itemData: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	qty: {
		color: 'black',
		fontSize: 17
	},
	title: {
		fontSize: 16
	},
	amount: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#455a64'
	},
	delete: {
		margin: 20
	}
});
