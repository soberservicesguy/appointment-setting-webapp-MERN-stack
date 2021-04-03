const initialState = {

	currentCartItem:{
	},

	entireWeekSessions: [
	],

}


const reducerForSetWeekSessions = (state = initialState, action) => {

	switch (action.type) {

		case "ADD_EMPTY_SESSION_SLOT":

			var currentEntireWeekSessions = state.entireWeekSessions

			let new_session = {}
			if ( currentEntireWeekSessions.length > 0 ){

				let last_id = currentEntireWeekSessions[ currentEntireWeekSessions.length-1 ].id

				if ( !Number.isInteger(last_id) ){

					new_session = {id: 0, ...action.session_object}

				} else {

					new_session = {id: last_id + 1, ...action.session_object}

				}

			} else {

				new_session = {id: 0, ...action.session_object}
			
			}

			currentEntireWeekSessions.push(new_session)
			// console.log('CART AFTER ADDITION')
			// console.log(currentEntireWeekSessions)

			return {...state, entireWeekSessions: [...currentEntireWeekSessions]}
			break;


		case "REMOVE_SESSION_SLOT":
			// console.log('CALLED')
			var currentEntireWeekSessions = state.entireWeekSessions

			var filtered_sessions = currentEntireWeekSessions.filter(
				function(item){
					return item.id === action.session_id
				}
			)

			var session_index = currentEntireWeekSessions.indexOf(filtered_sessions[0])
			if (session_index !== -1){
				currentEntireWeekSessions.splice(session_index, 1)
			}

			return {...state, entireWeekSessions: [...currentEntireWeekSessions]}
			break;

		case "EDIT_SOME_ATTRIBUTE_IN_SOME_SESSION":

			var currentEntireWeekSessions = state.entireWeekSessions
			var filtered_sessions = currentEntireWeekSessions.filter(
				function(item){
					return item.id === action.session_id
				}
			)

			var session_to_edit = filtered_sessions[0]

			session_to_edit[action.attribute_to_edit] = action.attribute_value

			return {...state, entireWeekSessions: [...currentEntireWeekSessions]}
			break;

		default:

			return state

	}

};

export default reducerForSetWeekSessions;
