import { useState } from 'react'

type Props = { startingCount?: number }

export function CounterWithProps({ startingCount }: Props) {
	const [count, setCount] = useState(startingCount ?? 0)

	return (
		<>
			<h2>Props</h2>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</>
	)
}
