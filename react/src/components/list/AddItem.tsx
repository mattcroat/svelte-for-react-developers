import { useContext } from 'react'
import { ListContext } from './context'

export function AddItem() {
	const { addItem } = useContext(ListContext)

	return <button onClick={addItem}>Add</button>
}
