// -- TaskItem --
import { Task } from '@/config/types'
import classes from './TaskItem.module.scss'
import InlineIcon from '@/components/ui/InlineIcon/InlineIcon'
import TaskTimer from '../TaskTimer/TaskTimer'
import { Button } from 'antd'
import { useTaskItem } from './useTaskItem'

interface TaskItemProps {
	data: Task
}

export default function TaskItem({ data }: TaskItemProps) {
	const { handlePause } = useTaskItem(data)

	return (
		<div className={classes['task-wrapper']}>
			<div className={classes['task-header']}>
				<h2 className={classes['task-header__label']}>{data.label}</h2>
				<div className={classes['task-header__icon']}>
					<InlineIcon name={`status-${data.status}`} />
				</div>
			</div>
			<div className={classes.task__timer}>
				<TaskTimer {...data} />
			</div>
			<div className={classes['task__description']}>{data.description}</div>
			<div className={classes.task__controls}>
				<Button
					icon={<InlineIcon name='status-paused' />}
					onClick={handlePause}
				/>
			</div>
		</div>
	)
}
