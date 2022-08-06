<script lang="ts">
	export let columns: number
</script>

<div class="grid" style:--columns={columns}>
	<slot />
</div>

<style>
	.grid {
		--columns: 0;

		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
	}
</style>
