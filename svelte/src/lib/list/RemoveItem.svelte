<script lang="ts">
	import { getContext } from 'svelte'

	const removeItem = getContext('removeItem')
</script>

<button on:click={removeItem}>Remove</button>
