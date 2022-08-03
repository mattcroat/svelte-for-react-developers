<script lang="ts">
	import { getContext } from 'svelte'
	type AddItem = () => void

	const addItem: AddItem = getContext('addItem')
</script>

<button on:click={addItem}>Add</button>
