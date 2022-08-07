<script lang="ts">
	const todos = [
		{ id: 1, text: 'Todo 1', completed: true },
		{ id: 2, text: 'Todo 2', completed: false },
		{ id: 3, text: 'Todo 3', completed: false },
		{ id: 4, text: 'Todo 4', completed: false }
	]
</script>

<ul>
	{#each todos as todo (todo.id)}
		<li class:completed={todo.completed}>
			{todo.completed ? `${todo.text} 🎉` : todo.text}
		</li>
	{/each}
</ul>

<style>
	.completed {
		text-decoration: line-through;
	}
</style>
