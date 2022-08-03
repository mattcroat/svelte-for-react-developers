import { Counter } from './components/counter'
import { CounterWithProps } from './components/props'
import { Grid } from './components/grid'
import { Todos } from './components/todos'
import { Form } from './components/form'
import { Player } from './components/player'
import { Composition } from './components/composition'

export default function App() {
	return (
		<>
			<Counter />
			<CounterWithProps startingCount={10} />
			<Grid title="Children" columns={4}>
				<div>Column 1</div>
				<div>Column 2</div>
				<div>Column 3</div>
				<div>Column 4</div>
			</Grid>
			<Todos />
			<Form />
			<Player />
			<Composition />
		</>
	)
}
