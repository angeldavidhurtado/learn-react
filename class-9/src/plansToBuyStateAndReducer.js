const initialStatePlnasToBuy = {
	placesBuy: [
		{ name:'CafayateCafayate', cost:90 },
		{ name:'Parque Nacional Los Cardones', cost:85 },
		{ name:'Viaducto La Polvorilla', cost:124 }
	],
	total:299
}

const type = {
	add: 'add',
	delete: 'delete'
}

const reducerPlansToBuy = (state, action) => {
	const newState = {...state}
	switch (action.type) {
		case type.add:
			const { placeName, placeCost } = action.payload
			if (newState.placesBuy.some(place => place.name == placeName))
				return state
			return {
				placesBuy: [...state.placesBuy, {name:placeName, cost:placeCost}],
				total: state.total + placeCost
			}
		case type.delete:
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
