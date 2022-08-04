import { writable } from 'svelte/store'

export function useReducer(reducer: any, state: any) {
	const { subscribe, update } = writable(state)

	function dispatch(action: any) {
		update((state) => reducer(state, action))
	}

	return [{ subscribe }, dispatch]
}
