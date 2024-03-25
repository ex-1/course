// -- TaskTimer --
import { TaskTimerProps } from '@/config/types'
import { useTaskTimer } from './useTaskTimer'
import classes from './TaskTimer.module.scss'
import { Tooltip } from 'antd'

export default function TaskTimer(props: TaskTimerProps) {
	const { tooltipMessage, time } = useTaskTimer(props)
	const prefix = props.endTime ? 'Осталось' : 'Прошло'

	return (
		<div className={classes['task-timer-wrapper']}>
			<div className={classes['task-timer']}>
				<span className={classes['task-timer__remain']}>
					{prefix} {time.spent.value} {time.spent.unit}
				</span>
				<Tooltip placement='bottom' title={tooltipMessage}>
					<div className={classes['task-timer__bar']}>
						<div
							className={classes['task-timer__bar-inner']}
							style={{ width: `${time.percent}%` }}
						/>
					</div>
				</Tooltip>
			</div>
		</div>
	)
}
