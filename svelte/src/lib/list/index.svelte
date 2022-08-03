<script lang="ts">
	import List from './List.svelte'
	import Items from './Items.svelte'
	import AddItem from './AddItem.svelte'
	import RemoveItem from './RemoveItem.svelte'
</script>

<List listItems={[1, 2, 3, 4]}>
	<Items />
	<AddItem />
	<RemoveItem />
</List>
