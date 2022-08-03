<script lang="ts">
	export let count = 0
</script>

<p>{count}</p>
<button on:click={() => (count += 1)}>Click</button>
