import { FC, ReactElement } from 'react'
import { SvgTypes } from 'types/Svg.types'

export const GraphUp: FC<SvgTypes> = ({ width, height }): ReactElement => {
	return (
		<svg
			width={width}
			height={height}
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="blue"
		>
			<title>graph-up</title>
			<path d="M20 20H4V4" stroke="#e2e8ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M4 16.5L12 9l3 3 4.5-4.5"
				stroke="#0a820e"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
