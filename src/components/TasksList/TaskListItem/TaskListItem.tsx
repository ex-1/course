// -- TaskListItem --
import { Button } from 'antd'
import classes from './TaskListItem.module.scss'
import { Task } from '@/config/types'
import { dateFromat } from '@/config/placeholders'
import dayjs from 'dayjs'
import { useLocalStorage } from '@/utils/useLocalStorage'
import InlineIcon from '@/components/ui/InlineIcon/InlineIcon'

interface TaskListItemProps {
	data: Task
}

export default function TaskListItem({ data }: TaskListItemProps) {
	const time = data.endTime
		? `${dayjs(data.startTime).format(dateFromat)} - ${dayjs(
				data.endTime
		  ).format(dateFromat)}`
		: `${dayjs(data.startTime).format(dateFromat)}`

	const { runTask, removeTask } = useLocalStorage()
	const onClickRun = () => runTask(data.id)
	const onClickDel = () => removeTask(data.id)

	return (
		<div className={classes['task-list-item']}>
			<div className={classes['task-list-item__label']}>
				<div className={classes['task-list-item__label-title']}>
					<span>{data.label}</span>
				</div>
				<div className={classes['task-list-item__label-time']}>
					<span>{time}</span>
				</div>
			</div>
			<div className={classes['task-list-item__controls']}>
				<Button type='primary' onClick={onClickRun}>
					<span>Начать</span>
				</Button>
				<Button
					type='primary'
					onClick={onClickDel}
					danger
					icon={<InlineIcon name='trash' />}
				/>
			</div>
		</div>
	)
}
