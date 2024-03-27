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
	const startTime = dayjs(data.startTime).format(dateFromat)
	const endTime = data.endTime ? dayjs(data.endTime).format(dateFromat) : null

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
					<span>{`Планируемая дата начала: ${startTime}`}</span>
					{endTime && <span>{`Дедлайн: ${endTime}`}</span>}
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
