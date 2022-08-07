import { useState } from 'react'

type Props = { count?: number }

export default function CounterWithProps(props: Props) {
	const [count, setCount] = useState(props.count ?? 0)

	return (
		<>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click
			</button>
		</>
	)
}
