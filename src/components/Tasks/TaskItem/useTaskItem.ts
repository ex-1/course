import { Task, TaskStatus } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'

export const useTaskItem = (data: Task) => {
	const { pauseTask, unPauseTask } = useLocalStorage()

	const handlePause = () => {
		if (data.status === TaskStatus.Running) {
			pauseTask(data.id)
		} else {
			unPauseTask(data.id)
		}
	}

	return { handlePause }
}
