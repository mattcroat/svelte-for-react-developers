<script lang="ts">
	import { getContext } from 'svelte'

	const addItem = getContext('addItem')
</script>

<button on:click={addItem}>Add</button>
