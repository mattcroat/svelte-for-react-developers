import { useEffect, useRef, useState } from 'react'
import ein from '../assets/video.mp4'

type Status = 'paused' | 'playing'

export default function Player() {
	const [status, setStatus] = useState<Status>('paused')
	const videoEl = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		status === 'paused' ? pause() : play()
	}, [status])

	function play() {
		videoEl.current?.play()
	}

	function pause() {
		videoEl.current?.pause()
	}

	function handleClick() {
		setStatus(status === 'paused' ? 'playing' : 'paused')
	}

	return (
		<>
			<video ref={videoEl} src={ein} loop />

			<button onClick={handleClick}>
				{status === 'paused' ? 'Play' : 'Pause'}
			</button>
		</>
	)
}
