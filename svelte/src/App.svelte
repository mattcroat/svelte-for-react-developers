<script lang="ts">
	import Counter from './lib/Components.svelte'
	import CounterWithProps from './lib/Props.svelte'
	import Grid from './lib/Children.svelte'
	import Todos from './lib/Logic.svelte'
	import Form from './lib/Events.svelte'
	import VideoPlayer from './lib/Synchronization.svelte'
	import FilteredTodos from './lib/Computed.svelte'
	import List from './lib/list/index.svelte'
	import AnimatedTodos from './lib/Animations.svelte'
	import Reducer from './lib/stores/index.svelte'
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

<h2>Synchronization</h2>
<VideoPlayer />

<h2>Computed</h2>
<FilteredTodos />

<h2>Composition</h2>
<List />

<h2>Stores</h2>
<Reducer />

<h2>Animations</h2>
<AnimatedTodos />
