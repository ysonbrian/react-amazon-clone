export const initialState = {
	basket: [],
	user: null,
};
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
	//console.log action to see what the information is
	switch (action.type) {
		// everytime action happens, it needs to return the data
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'ADD_TO_BASKET':
			//Logic for adding item to basket
			// action.item is its information user clicks the basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			//Logic for Removing item from basket

			// get the basket
			let newBasket = [...state.basket];

			// check to see if product exists
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				//item exits in basket, remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id} as its nothing in there)`
				);
			}

			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;
