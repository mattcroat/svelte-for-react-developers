import { createContext, useState } from 'react'

const itemsContext = createContext([1, 2, 3, 4])

function List({ children }: any) {
	return <ul>{children}</ul>
}

function ListItem({ children }: any) {
	return <li>{children}</li>
}

function AddItem({ items, addItem }: any) {
	return <button onClick={addItem}>Add</button>
}

function RemoveItem({ items, removeItem }: any) {
	return <button onClick={removeItem}>Remove</button>
}

export function Context() {
	const [items, setItems] = useState([1, 2, 3, 4])

	function addItem() {
		setItems((items) => [...items, items.length + 1])
	}

	function removeItem() {
		setItems((items) => items.slice(0, items.length - 1))
	}

	return (
		<>
			<h2>Context</h2>
			<List>
				{items.map((item) => (
					<ListItem key={item}>{item}</ListItem>
				))}
				<AddItem items={items} addItem={addItem} />
				<RemoveItem items={items} removeItem={removeItem} />
			</List>
		</>
	)
}
