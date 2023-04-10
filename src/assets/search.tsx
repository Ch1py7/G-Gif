import { FC, ReactElement } from 'react'
import { SvgTypes } from 'types/Svg.types'

export const Search: FC<SvgTypes> = ({ width, height }): ReactElement => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
			style={{ position: 'absolute', right: '8%' }}
		>
			<title>search</title>
			<path
				d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
				stroke="#000000"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
