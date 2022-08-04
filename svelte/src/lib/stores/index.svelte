<script lang="ts">
	import { useReducer } from './hooks'

	type Action = 'INCREMENT' | 'DECREMENT'

	function countReducer(count: number, action: Action) {
		switch (action) {
			case 'INCREMENT':
				return count + 1
			case 'DECREMENT':
				return count - 1
			default:
				throw new Error('Impossible state 💩')
		}
	}

	const [count, dispatch] = useReducer(countReducer, 0)
</script>

<h1>Count: {$count}</h1>

<button on:click={() => dispatch('INCREMENT')}>Increment</button>
<button on:click={() => dispatch('DECREMENT')}>Decrement</button>
