import { createContext } from 'react'

type ListContext = {
	items: any[]
	addItem: () => void
	removeItem: () => void
}

export const ListContext = createContext<ListContext>({
	items: [],
	addItem: () => null,
	removeItem: () => null
})
