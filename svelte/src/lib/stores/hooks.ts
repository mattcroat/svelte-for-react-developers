import { writable } from 'svelte/store'

// export function useReducer<TInitialState>(
// 	reducer: any,
// 	initialState: TInitialState
// ) {
// 	const state = writable(initialState)
// 	const dispatch = (action) =>
// 		state.update((currentState) => reducer(currentState, action))
// 	const readableState = derived(state, ($state) => $state)

// 	return [readableState, dispatch]
// }

export function useReducer(reducer, state) {
	const { subscribe, update } = writable(state)

	function dispatch(action) {
		update((state) => reducer(state, action))
	}

	return [{ subscribe }, dispatch]
}
