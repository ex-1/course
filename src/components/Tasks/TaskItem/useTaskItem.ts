import { Task, TaskStatus } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'

export const useTaskItem = (data: Task) => {
	const { pauseTask, unPauseTask, removeTask, completeTask } = useLocalStorage()

	const handlePause = () => {
		if (data.status === TaskStatus.Running) {
			pauseTask(data.id)
		} else {
			unPauseTask(data.id)
		}
	}

	const handleRemove = () => {
		removeTask(data.id)
	}

	const handleComplete = () => {
		completeTask(data.id)
	}

	return { handlePause, handleComplete, handleRemove }
}
