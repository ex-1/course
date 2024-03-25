// -- InlineIcon --
import classes from './InlineIcon.module.scss'
import cn from 'classnames'

interface InlineIconProps {
	name: string
	extraClass?: string
	extraSvgClass?: string
}

export default function InlineIcon({
	name,
	extraClass,
	extraSvgClass
}: InlineIconProps) {
	return (
		<div className={cn(classes['inline-icon'], extraClass)}>
			<svg className={cn(classes.icon, extraSvgClass)}>
				<use href={`#${name}`} />
			</svg>
		</div>
	)
}
