import Counter from './components/Components'
import CounterWithProps from './components/Props'
import Grid from './components/Children'
import Todos from './components/Logic'
import Form from './components/Events'
import VideoPlayer from './components/Synchronization'
import FilteredTodos from './components/Computed'
import List from './components/list'

export default function App() {
	return (
		<>
			<h2>Components</h2>
			<Counter />

			<h2>Props</h2>
			<CounterWithProps count={10} />

			<h2>Children</h2>
			<Grid columns={4}>
				<div>Column 1</div>
				<div>Column 2</div>
				<div>Column 3</div>
				<div>Column 4</div>
			</Grid>

			<h2>Logic</h2>
			<Todos />

			<h2>Events</h2>
			<Form />

			<h2>Synchronization</h2>
			<VideoPlayer />

			<h2>Computed</h2>
			<FilteredTodos />

			<h2>Composition</h2>
			<List />
		</>
	)
}
