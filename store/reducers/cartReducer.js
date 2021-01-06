// import {  } from "../../data/dummy-data";
import CartItem from '../../models/cart-item';
import { ADD_TO_CART } from '../actions/cartAction';
const initialState = {
	items: {},
	totalAmount: 0
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			const price = payload.price;
			const title = payload.title;
			if (state.items[payload.id]) {
				//we have  the item in the cart, so we update it
				const updatedCartItem = new CartItem(
					state.items[payload.id].quantity + 1,
					price,
					title,
					state.items[payload.id].sum + price
				);
				return {
					...state,
					items: {
						...state.items,
						[payload.id]: updatedCartItem
					},
					totalAmount: state.totalAmount + price
				};
			} else {
				const newCartItem = new CartItem(1, price, title, price);
				return {
					...state,
					items: {
						...state.items,
						[payload.id]: newCartItem
					},
					totalAmount: state.totalAmount + price
				};
			}

		default:
			return state;
	}
};
