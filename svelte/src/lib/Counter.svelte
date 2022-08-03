<script lang="ts">
	let count = 0
</script>

<p>{count}</p>
<button on:click={() => (count += 1)}>Click</button>

<style>
	p {
		font-weight: 700;
	}
</style>
