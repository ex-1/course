// -- TasksList --
import { Button } from 'antd'
import NewTaskModal from './NewTaskModal/NewTaskModal'
import InlineIcon from '../ui/InlineIcon/InlineIcon'
import classes from './TasksList.module.scss'
import { useTaskList } from './useTaskList'
import TaskListItem from './TaskListItem/TaskListItem'

export default function TasksList() {
	const { handleOpenModal, isModalOpen, tasks } = useTaskList()
	return (
		<>
			<div className={classes['tasks-list-wrapper']}>
				<div className={classes['tasks-list']}>
					{tasks.length > 0 &&
						tasks.map((t, i) => (
							<TaskListItem key={`task-item-${i}-${t.id}`} data={t} />
						))}
				</div>
				<div className={classes['tasks-list__controls']}>
					<Button onClick={handleOpenModal}>
						<div className={classes['btn-inner']}>
							<span>Создать задачу</span>
							<InlineIcon name='plus' extraClass={classes['btn-inner__icon']} />
						</div>
					</Button>
				</div>
			</div>
			<NewTaskModal
				isModalOpen={isModalOpen}
				handleOpenModal={handleOpenModal}
			/>
		</>
	)
}
