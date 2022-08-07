import { useState } from 'react'

export default function Form() {
	const [value, setValue] = useState('')

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault()
		alert(value)
		setValue('')
	}

	function handleInput(event: React.ChangeEvent) {
		const inputEl = event.target as HTMLInputElement
		setValue(inputEl.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleInput}
				value={value}
			/>
			<button type="submit" disabled={value.length === 0}>
				Submit
			</button>
		</form>
	)
}
