import { List } from './List'
import { Items } from './Items'
import { AddItem } from './AddItem'
import { RemoveItem } from './RemoveItem'

export default function Composition() {
	return (
		<List listItems={[1, 2, 3, 4]}>
			<Items />
			<AddItem />
			<RemoveItem />
		</List>
	)
}
