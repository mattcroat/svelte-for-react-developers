<script lang="ts">
	import { setContext } from 'svelte'
	import { writable, type Writable } from 'svelte/store'
	export let listItems: any[]

	const items = writable(listItems)

	setContext('items', items)
	setContext('addItem', addItem)
	setContext('removeItem', removeItem)

	function addItem() {
		$items = [...$items, $items.length + 1]
	}

	function removeItem() {
		$items = $items.slice(0, $items.length - 1)
	}
</script>

<ul>
	<slot />
</ul>
