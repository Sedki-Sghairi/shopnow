import PRODUCTS from '../../data/dummy-data';

const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((x) => x.ownerId === 'u1')
};

export default (state = initialState, { type, payload }) => {
	// switch (type) {
	// 	case typeName:
	// 		return { ...state, ...payload };

	// 	default:
	return state;
	// }
};
