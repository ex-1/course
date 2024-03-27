import { TaskStatus } from './types'

export const taskStatusName: Record<TaskStatus, string> = {
	completed: 'Задача выполнена',
	expired: 'Задача просрочена',
	new: 'Новая задача',
	paused: 'Задача на паузе',
	running: 'Задача выполняется'
}
