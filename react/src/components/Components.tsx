import { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)

	return (
		<>
			<p style={{ fontWeight: 700 }}>{count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click
			</button>
		</>
	)
}
