import { useContext } from 'react'
import { ListContext } from './context'

export function RemoveItem() {
	const { removeItem } = useContext(ListContext)

	return <button onClick={removeItem}>Remove</button>
}
