import { useState } from 'react'

export function Form() {
	const [name, setName] = useState('')

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault()
		alert(name)
		setName('')
	}

	function handleInput(event: React.ChangeEvent) {
		const inputEl = event.target as HTMLInputElement
		setName(inputEl.value)
	}

	return (
		<>
			<h2>Events</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleInput} value={name} />
				<button type="submit" disabled={name.length === 0}>
					Submit
				</button>
			</form>
		</>
	)
}
