import * as actions from './cart.actiontype';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};
		case actions.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;
