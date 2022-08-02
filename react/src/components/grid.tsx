import { useState } from 'react'

type Props = {
	children: React.ReactNode
	columns: number
	title: string
}

export function Grid({ children, columns, title }: Props) {
	return (
		<>
			<h2>{title}</h2>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{children}
			</div>
		</>
	)
}
