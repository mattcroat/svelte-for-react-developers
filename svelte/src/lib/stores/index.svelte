<script lang="ts">
	import { useReducer } from './hooks'

	type Count = number
	type Action = 'INCREMENT' | 'DECREMENT'

	function countReducer(count: Count, action: Action) {
		switch (action) {
			case 'INCREMENT':
				return count + 1
			case 'DECREMENT':
				return count - 1
			default:
				throw new Error('Impossible state 💩')
		}
	}

	const [count, dispatch] = useReducer<Count, Action>(
		countReducer,
		0
	)
</script>

<h1>The count is {$count}</h1>

<button on:click={() => dispatch('INCREMENT')}>+</button>
<button on:click={() => dispatch('DECREMENT')}>-</button>
