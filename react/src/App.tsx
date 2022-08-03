import { Counter } from './components/counter'
import { CounterWithProps } from './components/props'
import { Grid } from './components/grid'
import { Todos } from './components/todos'
import { Form } from './components/form'
import { Player } from './components/player'
import { Composition } from './components/list'
// import { Composition } from './components/composition'

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

			<h2>Effects</h2>
			<Player />

			<h2>Composition</h2>
			<Composition />
		</>
	)
}
