import { useEffect, useRef, useState } from 'react'
import video from '../assets/video.mp4'

type Status = 'paused' | 'playing'

export function Player() {
	const [status, setStatus] = useState<Status>('paused')
	const videoEl = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		status === 'playing' ? videoEl.current?.play() : videoEl.current?.pause()
	}, [status])

	function handleClick() {
		setStatus((status) => (status === 'paused' ? 'playing' : 'paused'))
	}

	return (
		<>
			<h2>Effects</h2>
			<video ref={videoEl} src={video} loop></video>
			<button onClick={handleClick}>
				{status === 'paused' ? 'Play' : 'Pause'}
			</button>
		</>
	)
}
