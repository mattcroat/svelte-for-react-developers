<script lang="ts">
	type Todo = {
		id: number
		text: string
		completed: boolean
	}

	type Filters = 'all' | 'active' | 'completed'

	let todos = [
		{ id: 1, text: 'Todo 1', completed: false },
		{ id: 2, text: 'Todo 2', completed: false },
		{ id: 3, text: 'Todo 3', completed: false },
		{ id: 4, text: 'Todo 4', completed: false }
	]

	function addTodo(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			todos = [
				...todos,
				{ id: Date.now(), text: todo, completed: false }
			]
			todo = ''
		}
	}

	function removeTodo(id: number) {
		todos = todos.filter((todo) => todo.id !== id)
	}

	function filterTodos(todos: Todo[], filter: Filters) {
		switch (filter) {
			case 'all':
				return todos
			case 'active':
				return todos.filter((todo) => !todo.completed)
			case 'completed':
				return todos.filter((todo) => todo.completed)
		}
	}

	let todo = ''
	let filter: Filters = 'all'
	$: filteredTodos = filterTodos(todos, filter)
</script>

<div class="todos">
	<input
		on:keypress={addTodo}
		bind:value={todo}
		type="text"
		name="todo"
		id="todo"
		placeholder="What needs to be done?"
	/>

	{#each filteredTodos as { id, text, completed } (id)}
		<div class="todo">
			<input type="checkbox" bind:checked={completed} />
			<label class:completed for="todo">{text}</label>
			<button on:click={() => removeTodo(id)}>❌</button>
		</div>
	{/each}

	<div class="filters">
		<button on:click={() => (filter = 'all')}>All</button>
		<button on:click={() => (filter = 'active')}>
			Active
		</button>
		<button on:click={() => (filter = 'completed')}>
			Completed
		</button>
	</div>
</div>

<style>
	.completed {
		text-decoration: line-through;
	}
</style>
