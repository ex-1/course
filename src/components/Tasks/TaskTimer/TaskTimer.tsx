// -- TaskTimer --
import { TaskTimerProps } from '@/config/types'
import { useTaskTimer } from './useTaskTimer'
import classes from './TaskTimer.module.scss'
import { Tooltip } from 'antd'
import cn from 'classnames'

export default function TaskTimer(props: TaskTimerProps) {
	const { percent, remainTime, spentTime, dates } = useTaskTimer(props)
	const tooltipContent = dates.end
		? `${dates.start} - ${dates.end}`
		: `Запущена ${dates.start}`

	return (
		<div className={classes['task-timer-wrapper']}>
			<div className={classes['task-timer']}>
				<span className={classes['task-timer__remain']}>
					{`Потрачено времени: ${spentTime}`}
					{remainTime && ` / Осталось: ${remainTime}`}
				</span>
				<Tooltip placement='bottom' title={tooltipContent}>
					<div className={classes['task-timer__bar']}>
						<div
							className={cn(
								classes['task-timer__bar-inner'],
								percent === null && classes['rainbow']
							)}
							style={{ width: `${percent ?? 100}%` }}
						/>
					</div>
				</Tooltip>
			</div>
		</div>
	)
}
