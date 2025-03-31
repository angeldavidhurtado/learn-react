const initialStatePlnasToBuy = {
	placesBuy: [
		{ name:'CafayateCafayate', cost:90 },
		{ name:'Parque Nacional Los Cardones', cost:85 },
		{ name:'Viaducto La Polvorilla', cost:124 }
	],
	total:0
}

const type = {
	delete:'delete'
}

const reducerPlansToBuy = (state, action) => {
	switch (action.type) {
		case type.delete:
			const newState = {}
			newState.placesBuy = state.placesBuy.filter(
				place => place.name != action.payload.placeName
			)
			newState.total = newState.placesBuy.reduce(
				(total, place) => total + place.cost,
			0)
			return newState
		default:
			return state
	}
}

const plansToBuyStateAndReducer = {
	initialStatePlnasToBuy,
	type,
	reducerPlansToBuy
}

export default plansToBuyStateAndReducer
/*
const [statePlansToBuy, dispatchPlansToBuy] = useReducer(
		plansToBuy.reducerPlansToBuy,
		plansToBuy.initialStatePlnasToBuy
	)
*/
