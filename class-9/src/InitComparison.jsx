import React, { useReducer, useState } from 'react';

// Función costosa que simula un cálculo o inicialización pesada
function expensiveComputation(initialValue) {
	console.log('Ejecutando expensiveComputation con valor:', initialValue);
	return { count: initialValue };
}

// Reducer simple para incrementar el contador
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		default:
			return state;
	}
}

// Sin lazy initialization: la función costosa se ejecuta en cada render del componente padre
function CounterNoLazy({ initialCount }) {
	// Se ejecuta expensiveComputation cada vez que se evalúa esta línea
	const [state, dispatch] = useReducer(reducer, expensiveComputation(initialCount));

	return (
		<div style={{ border: '1px solid red', padding: '1rem', margin: '1rem' }}>
			<h2>Sin lazy initialization</h2>
			<p>Contador: {state.count}</p>
			<button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
		</div>
	);
}

// Con lazy initialization: la función costosa se ejecuta solo una vez en el montaje
function CounterLazy({ initialCount }) {
	// React llama a expensiveComputation(initialCount) solo en el montaje
	const [state, dispatch] = useReducer(reducer, initialCount, expensiveComputation);
	console.log(initialCount)

	return (
		<div style={{ border: '1px solid green', padding: '1rem', margin: '1rem' }}>
			<h2>Con lazy initialization</h2>
			<p>Contador: {state.count}</p>
			<button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
		</div>
	);
}

// Componente principal para forzar re-renders
function InitComparison() {
	const [dummy, setDummy] = useState(0);

	return (
		<div>
			<button onClick={() => setDummy(dummy + 1)}>
				Re-render App (dummy: {dummy})
			</button>
			<CounterNoLazy initialCount={0} />
			<CounterLazy initialCount={0} />
		</div>
	);
}

export default InitComparison;
