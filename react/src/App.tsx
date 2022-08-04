import { Counter } from './components/Counter'
import { CounterWithProps } from './components/Props'
import { Grid } from './components/Grid'
import { Todos } from './components/Todos'
import { Form } from './components/Form'
import { Player } from './components/Player'
import { Reactivity } from './components/Reactivity'
import { Composition } from './components/list'

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

			<h2>Reactivity</h2>
			<Reactivity />
		</>
	)
}
