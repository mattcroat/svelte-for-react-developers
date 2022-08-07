import { useState } from 'react'

type Todo = {
	id: number
	text: string
	completed: boolean
}

type Filters = 'all' | 'active' | 'completed'

export default function FilteredTodos() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: 'Todo 1', completed: false },
		{ id: 2, text: 'Todo 2', completed: false },
		{ id: 3, text: 'Todo 3', completed: false },
		{ id: 4, text: 'Todo 4', completed: false }
	])
	const [todo, setTodo] = useState('')
	const [filter, setFilter] = useState<Filters>('all')

	const filteredTodos = filterTodos(todos, filter)

	function addTodo(
		event: React.KeyboardEvent,
		todo: string
	) {
		if (event.key === 'Enter') {
			setTodos([
				...todos,
				{ id: Date.now(), text: todo, completed: false }
			])
			setTodo('')
		}
	}

	function completeTodo(id: number) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	function removeTodo(id: number) {
		setTodos(todos.filter((todo) => todo.id !== id))
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

	return (
		<div className="todos">
			<input
				onKeyPress={(event) => addTodo(event, todo)}
				onChange={(event) => setTodo(event.target.value)}
				value={todo}
				type="text"
				name="todo"
				id="todo"
				placeholder="What needs to be done?"
			/>

			{filteredTodos.map(({ id, text, completed }) => (
				<div key={id} className="todo">
					<input
						type="checkbox"
						onChange={() => completeTodo(id)}
						checked={completed}
					/>
					<label
						htmlFor="todo"
						style={{
							textDecoration: completed
								? 'line-through'
								: ''
						}}
					>
						{text}
					</label>
					<button onClick={() => removeTodo(id)}>❌</button>
				</div>
			))}

			<div className="filters">
				<button onClick={() => setFilter('all')}>
					All
				</button>
				<button onClick={() => setFilter('active')}>
					Active
				</button>
				<button onClick={() => setFilter('completed')}>
					Completed
				</button>
			</div>
		</div>
	)
}
