<script lang="ts">
	import { setContext } from 'svelte'
	import { writable, type Writable } from 'svelte/store'
	export let listItems: any[]

	type Items = Writable<any[]>
	type AddItem = () => void
	type RemoveItem = () => void

	const items = writable(listItems)

	setContext<Items>('items', items)
	setContext<AddItem>('addItem', addItem)
	setContext<RemoveItem>('removeItem', removeItem)

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
