<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	const items: Writable<any[]> = getContext('items')
</script>

{#each $items as item}
	<li>{item}</li>
{/each}
