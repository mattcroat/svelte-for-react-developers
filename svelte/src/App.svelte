<script lang="ts">
	import Counter from './lib/Counter.svelte'
	import CounterWithProps from './lib/Props.svelte'
	import Grid from './lib/Grid.svelte'
	import Todos from './lib/Todos.svelte'
	import Form from './lib/Form.svelte'
	import Player from './lib/Player.svelte'
	import Computed from './lib/Computed.svelte'
	import Composition from './lib/list/index.svelte'
	import Animations from './lib/Animations.svelte'
	import Stores from './lib/stores/index.svelte'
</script>

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

<h2>Computed</h2>
<Computed />

<h2>Composition</h2>
<Composition />

<h2>Animations</h2>
<Animations />

<h2>Stores</h2>
<Stores />
