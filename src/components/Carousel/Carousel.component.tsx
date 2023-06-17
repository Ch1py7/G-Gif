import { FC, ReactElement, useMemo, useCallback, useState, Children } from 'react'
import * as S from './Carousel.styles'
import { arrowLeft } from 'assets'

export interface CarouselProps {
	children: ReactElement | ReactElement[]
}

export const Carousel: FC<CarouselProps> = ({ children }): ReactElement => {
	const [current, setCurrent] = useState<number>(0)
	const childrenArray = useMemo(() => Children.toArray(children), [children])

	const handleNext = useCallback(() => {
		setCurrent((prev) => (prev === childrenArray.length - 12 ? 0 : prev + 1))
	}, [childrenArray])

	const handlePrev = useCallback(() => {
		setCurrent((prev) => (prev === 0 ? childrenArray.length - 12 : prev - 1))
	}, [childrenArray])

	return (
		<S.Carousel>
			<S.CarouselButtonsContainer>
				<S.CarouselButton onClick={handlePrev}>
					<img src={arrowLeft} alt='anterior' />
				</S.CarouselButton>
				<S.CarouselButton onClick={handleNext}>
					<img src={arrowLeft} alt='siguiente' />
				</S.CarouselButton>
			</S.CarouselButtonsContainer>
			<S.CarouselList items={childrenArray.length} current={current}>
				{childrenArray.map((child, index) => (
					<S.CarouselItem key={index}>{child}</S.CarouselItem>
				))}
			</S.CarouselList>
		</S.Carousel>
	)
}
