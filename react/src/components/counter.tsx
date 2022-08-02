import { useState } from 'react'

export function Counter() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h2>Components</h2>
			<p style={{ fontWeight: 700 }}>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</>
	)
}
