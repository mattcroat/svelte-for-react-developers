import { useState } from 'react'
import { ListContext } from './context'

type ListProps = {
	children: React.ReactNode
	listItems: any[]
}

export function List({ children, listItems }: ListProps) {
	const [items, setListItems] = useState(listItems)

	function addItem() {
		setListItems((items) => [...items, items.length + 1])
	}

	function removeItem() {
		setListItems((items) =>
			items.slice(0, items.length - 1)
		)
	}

	return (
		<ListContext.Provider
			value={{ items, addItem, removeItem }}
		>
			<ul>{children}</ul>
		</ListContext.Provider>
	)
}
