// -- Tasks --
import classes from './Tasks.module.scss'
import TaskItem from './TaskItem/TaskItem'
import { useTasks } from './useTasks'
import TaskItemEmpty from './TaskItem/TaskItemEmpty'

export default function Tasks() {
	const { tasks } = useTasks()

	return (
		<div className={classes['tasks-wrapper']}>
			<div className={classes.tasks}>
				{tasks.length > 0 ? (
					tasks.map((t, i) => (
						<TaskItem key={`task-item-${i}-${t.id}`} data={t} />
					))
				) : (
					<TaskItemEmpty />
				)}
			</div>
		</div>
	)
}
