<script lang="ts">
	import { useReducer } from './hooks'

	type CountType = number
	type ActionType = 'INCREMENT' | 'DECREMENT'

	function countReducer(
		count: CountType,
		action: ActionType
	) {
		switch (action) {
			case 'INCREMENT':
				return count + 1
			case 'DECREMENT':
				return count - 1
			default:
				throw new Error('Impossible state 💩')
		}
	}

	const [count, dispatch] = useReducer<
		CountType,
		ActionType
	>(countReducer, 0)
</script>

<h1>The count is {$count}</h1>

<button on:click={() => dispatch('INCREMENT')}>+</button>
<button on:click={() => dispatch('DECREMENT')}>-</button>
