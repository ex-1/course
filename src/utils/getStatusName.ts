import { taskStatusName } from '@/config/taskStatuses'
import { TaskStatus } from '@/config/types'

export const getStatusName = (taskStatus: TaskStatus) => {
	return taskStatusName[taskStatus]
}
