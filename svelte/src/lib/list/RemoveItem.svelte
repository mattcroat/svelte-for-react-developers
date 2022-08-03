<script lang="ts">
	import { getContext } from 'svelte'
	type RemoveItem = () => void

	const removeItem: RemoveItem = getContext('removeItem')
</script>

<button on:click={removeItem}>Remove</button>
