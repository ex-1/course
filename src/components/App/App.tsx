// -- App --

import { Divider, Typography } from 'antd'
import Tasks from '../Tasks/Tasks'
import TasksList from '../TasksList/TasksList'
import classes from './App.module.scss'

export default function App() {
	return (
		<div className={classes['app-wrapper']}>
			<div className={classes.app}>
				<div className={classes['app__tasks-block']}>
					<Typography.Title level={2}>Активные задачи</Typography.Title>
					<Divider />
					<Tasks />
				</div>
				<div className={classes['app__tasks-list']}>
					<Typography.Title level={2}>Очередь задач</Typography.Title>
					<Divider />
					<TasksList />
				</div>
			</div>
		</div>
	)
}
