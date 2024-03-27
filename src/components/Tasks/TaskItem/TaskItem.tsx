// -- TaskItem --
import { Task, TaskStatus } from '@/config/types'
import classes from './TaskItem.module.scss'
import InlineIcon from '@/components/ui/InlineIcon/InlineIcon'
import TaskTimer from '../TaskTimer/TaskTimer'
import { Button, Tooltip } from 'antd'
import { useTaskItem } from './useTaskItem'
import { getStatusName } from '@/utils/getStatusName'
import dayjs from 'dayjs'
import { dateFromat } from '@/config/placeholders'

interface TaskItemProps {
	data: Task
}

export default function TaskItem({ data }: TaskItemProps) {
	const { handlePause, handleRemove, handleComplete } = useTaskItem(data)

	const statusName = getStatusName(data.status)

	const completedTime = data.completedTime
		? dayjs(data.completedTime).format(dateFromat)
		: null

	const statusTooltip = completedTime
		? `${statusName} (${completedTime})`
		: statusName

	return (
		<div className={classes['task-wrapper']}>
			<div className={classes['task-header']}>
				<h2 className={classes['task-header__label']} title={data.label}>
					{data.label}
				</h2>
				<Tooltip placement='left' title={statusTooltip}>
					<div className={classes['task-header__icon']}>
						<InlineIcon name={`status-${data.status}`} />
					</div>
				</Tooltip>
			</div>
			<div className={classes.task__timer}>
				<TaskTimer {...data} />
			</div>
			<div className={classes['task__description']}>{data.description}</div>
			<div className={classes.task__controls}>
				<Button
					onClick={handlePause}
					disabled={data.status === TaskStatus.Completed}
				>
					<InlineIcon name='status-paused' extraClass={classes['btn-icon']} />
				</Button>
				<Button onClick={handleRemove}>
					<InlineIcon name='trash-round' extraClass={classes['btn-icon']} />
				</Button>
				<Button
					disabled={data.status === TaskStatus.Completed}
					onClick={handleComplete}
				>
					<InlineIcon
						name='status-completed'
						extraClass={classes['btn-icon']}
					/>
				</Button>
			</div>
		</div>
	)
}
