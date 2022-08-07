<script lang="ts">
	import ein from '../assets/video.mp4'

	let videoEl: HTMLVideoElement = null
	let status: 'paused' | 'playing' = 'paused'

	function play() {
		videoEl.play()
		status = 'playing'
	}

	function pause() {
		videoEl.pause()
		status = 'paused'
	}

	function handleClick() {
		status === 'paused' ? play() : pause()
	}
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={videoEl} src={ein} loop />

<button on:click={handleClick}>
	{status === 'paused' ? 'Play' : 'Pause'}
</button>
