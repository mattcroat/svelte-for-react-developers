import { useState } from 'react'

type Props = {
	children: React.ReactNode
	columns: number
}

export default function Grid({ children, columns }: Props) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`
			}}
		>
			{children}
		</div>
	)
}
