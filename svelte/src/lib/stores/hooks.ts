import { writable } from 'svelte/store'

export function useReducer<TState, TAction>(
	reducer: any,
	state: TState
) {
	const { subscribe, update } = writable(state)

	function dispatch(action: TAction) {
		update((state) => reducer(state, action))
	}

	return [{ subscribe }, dispatch] as const
}
