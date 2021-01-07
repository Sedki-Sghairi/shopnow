import Order from '../../models/order';

const initialState = {
	orders: []
};

export default (state = initialState, action) => {
	switch (type) {
		case ADD_ORDER:
			const newOrder = new Order(
				new Date().toString,
				action.orderData.items,
				action.orderData.amount,
				new Date()
			);
			return { ...state, orders: state.orders.concat(newOrder) };

		default:
			return state;
	}
};
