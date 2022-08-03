<script lang="ts">
	import { getContext } from 'svelte'

	const items = getContext('items')
</script>

{#each $items as item}
	<li>{item}</li>
{/each}
