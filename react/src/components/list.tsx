import { createContext, useContext, useState } from 'react'

type ListProps = {
	children: React.ReactNode
	listItems: any[]
}

type ListContext = {
	items: any[]
	addItem: () => void
	removeItem: () => void
}

const ListContext = createContext<ListContext>({
	items: [],
	addItem: () => null,
	removeItem: () => null,
})

function List({ children, listItems }: ListProps) {
	const [items, setListItems] = useState(listItems)

	function addItem() {
		setListItems((items) => [...items, items.length + 1])
	}

	function removeItem() {
		setListItems((items) => items.slice(0, items.length - 1))
	}

	return (
		<ListContext.Provider value={{ items, addItem, removeItem }}>
			<ul>{children}</ul>
		</ListContext.Provider>
	)
}

function Items() {
	const { items } = useContext(ListContext)

	return (
		<>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</>
	)
}

function AddItem() {
	const { addItem } = useContext(ListContext)
	return <button onClick={addItem}>Add</button>
}

function RemoveItem() {
	const { removeItem } = useContext(ListContext)
	return <button onClick={removeItem}>Remove</button>
}

export function Composition() {
	return (
		<List listItems={[1, 2, 3, 4]}>
			<Items />
			<AddItem />
			<RemoveItem />
		</List>
	)
}
