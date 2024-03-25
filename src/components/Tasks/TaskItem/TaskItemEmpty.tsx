// -- TaskItemEmpty --

import { Typography } from 'antd'
import classes from './TaskItem.module.scss'

export default function TaskItemEmpty() {
	return (
		<div className={classes['task-wrapper']}>
			<Typography.Text>У вас нет активных задач</Typography.Text>
		</div>
	)
}
