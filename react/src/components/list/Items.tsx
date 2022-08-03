import { useContext } from 'react'
import { ListContext } from './context'

export function Items() {
	const { items } = useContext(ListContext)

	return (
		<>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</>
	)
}
