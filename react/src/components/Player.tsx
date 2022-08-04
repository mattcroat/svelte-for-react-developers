import { useEffect, useRef, useState } from 'react'
import ein from '../assets/video.mp4'

type Status = 'paused' | 'playing'

export function Player() {
	const [status, setStatus] = useState<Status>('paused')
	const videoEl = useRef<HTMLVideoElement>(null)

	function play() {
		videoEl.current?.play()
	}

	function pause() {
		videoEl.current?.pause()
	}

	useEffect(() => {
		status === 'paused' ? pause() : play()
	}, [status])

	function handleClick() {
		setStatus(status === 'paused' ? 'playing' : 'paused')
	}

	return (
		<>
			<video ref={videoEl} src={ein} loop></video>

			<button onClick={handleClick}>
				{status === 'paused' ? 'Play' : 'Pause'}
			</button>
		</>
	)
}
