<script lang="ts">
	let value = ''

	function handleSubmit(event: SubmitEvent) {
		alert(value)
		value = ''
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value />
	<button type="submit" disabled={value.length === 0}>
		Submit
	</button>
</form>
