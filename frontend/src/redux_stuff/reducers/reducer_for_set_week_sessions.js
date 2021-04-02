const initialState = {

	currentCartItem:{
	},

	entireWeekSessions: [
	],

}


const reducerForSetWeekSessions = (state = initialState, action) => {

	switch (action.type) {

		case "ADD_EMPTY_SESSION_SLOT":

			var currententireWeekSessions = state.entireWeekSessions

			let new_product = {}
			if ( currententireWeekSessions.length > 0 ){

				let last_id = currententireWeekSessions[ currententireWeekSessions.length-1 ].id

				if ( !Number.isInteger(last_id) ){

					new_product = {id: 0, ...action.product_object}

				} else {

					new_product = {id: last_id + 1, ...action.product_object}

				}

			} else {

				new_product = {id: 0, ...action.product_object}
			
			}

			currententireWeekSessions.push(new_product)
			// console.log('CART AFTER ADDITION')
			// console.log(currententireWeekSessions)

			return {...state, entireWeekSessions: [...currententireWeekSessions]}
			break;


		case "REMOVE_PRODUCT_FROM_CART":
			// console.log('CALLED')
			var currententireWeekSessions = state.entireWeekSessions

			var filtered_products = currententireWeekSessions.filter(
				function(item){
					return item.id === action.product_id
				}
			)

			var product_index = currententireWeekSessions.indexOf(filtered_products[0])
			if (product_index !== -1){
				currententireWeekSessions.splice(product_index, 1)
			}

			return {...state, entireWeekSessions: [...currententireWeekSessions]}
			break;


		case "EDIT_PRODUCT_COLOR":
			var currententireWeekSessions = state.entireWeekSessions
			var filtered_products = currententireWeekSessions.filter(
				function(item){
					return item.id === action.product_id
				}
			)

			var product_to_edit = filtered_products[0]

			product_to_edit.product_color = action.color

			return {...state, entireWeekSessions: [...currententireWeekSessions]}
			break;

		case "EDIT_PRODUCT_QUANTITY":
			var currententireWeekSessions = state.entireWeekSessions

			var filtered_products = currententireWeekSessions.filter(
				function(item){
					return item.id === action.product_id
				}
			)
			var product_to_edit = filtered_products[0]

			product_to_edit.initial_quantity = action.quantity

			return {...state, entireWeekSessions: [...currententireWeekSessions]}
			break;


		case "EDIT_PRODUCT_SIZE":
			var currententireWeekSessions = state.entireWeekSessions
			var filtered_products = currententireWeekSessions.filter(
				function(item){
					return item.id === action.product_id
				}
			)
			var product_to_edit = filtered_products[0]

			product_to_edit.product_size = action.size

			return {...state, entireWeekSessions: [...currententireWeekSessions]}
			break;


		case "SET_CURRENT_CART_ITEM":

			return {...state, currentCartItem: action.cart_item}
			break;


		default:

			return state

	}

};

export default reducerForSetWeekSessions;
