const initialStatePlnasToBuy = {
	placesBuy: [
		{ name:'CafayateCafayate', cost:90 },
		{ name:'Parque Nacional Los Cardones', cost:85 },
		{ name:'Viaducto La Polvorilla', cost:124 }
	],
	total:0
}

const reducerPlansToBuy = (state, action) => {
	return {saludo: 'Hola'}
}

const plansToBuy = { reducerPlansToBuy, initialStatePlnasToBuy }

export default plansToBuy
/*
const [statePlansToBuy, dispatchPlansToBuy] = useReducer(
		plansToBuy.reducerPlansToBuy,
		plansToBuy.initialStatePlnasToBuy
	)
*/
