import { NewTask, Task, TaskStatus } from '@/config/types'
import dayjs from 'dayjs'

export const useLocalStorage = () => {
	// api
	const storageApi = {
		getStorage: () => window.localStorage,

		getItem: (key: string) => {
			return window.localStorage.getItem(key)
		},

		setItem: (key: string, value: string) => {
			window.localStorage.setItem(key, value)
		},

		removeItem: (key: string) => {
			window.localStorage.removeItem(key)
		}
	}

	// Tasks
	const getNewId = () => {
		const lastId = Number(storageApi.getItem('latestTaskId'))
		storageApi.setItem('latestTaskId', String(lastId + 1))

		return lastId
	}

	const addNewTask = (task: NewTask) => {
		const taskQueue: Task[] = JSON.parse(
			storageApi.getItem('taskQueue') || '[]'
		)

		const newId = getNewId()

		const newTask: Task = {
			...task,
			id: newId,
			status: TaskStatus.New,
			point: null,
			total: 0
		}

		taskQueue.push(newTask)
		storageApi.setItem('taskQueue', JSON.stringify(taskQueue))

		window.dispatchEvent(new Event('taskQueue'))
	}

	const changeTaskStatus = (
		id: number,
		status: Omit<TaskStatus, TaskStatus.New | TaskStatus.Running>
	) => {
		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')
		const newTasks = tasks.map(t => (t.id === id ? { ...t, status } : t))
		storageApi.setItem('tasks', JSON.stringify(newTasks))

		window.dispatchEvent(new Event('tasks'))
		window.dispatchEvent(new Event('taskQueue'))
	}

	const runTask = (id: number) => {
		const taskQueue: Task[] = JSON.parse(
			storageApi.getItem('taskQueue') || '[]'
		)

		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')

		const taskIndex = taskQueue.findIndex(t => t.id === id)
		if (taskIndex !== -1) {
			const newTask: Task = {
				...taskQueue[taskIndex],
				status: TaskStatus.Running,
				startTime: dayjs().toISOString(),
				point: dayjs().toISOString()
			}

			tasks.push(newTask)
			taskQueue.splice(taskIndex, 1)

			storageApi.setItem('tasks', JSON.stringify(tasks))
			storageApi.setItem('taskQueue', JSON.stringify(taskQueue))

			window.dispatchEvent(new Event('tasks'))
			window.dispatchEvent(new Event('taskQueue'))
		}
	}

	const pauseTask = (id: number) => {
		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')
		const taskIndex = tasks.findIndex(t => t.id === id)

		if (taskIndex !== -1) {
			tasks[taskIndex].status = TaskStatus.Paused
			tasks[taskIndex].total += dayjs().diff(tasks[taskIndex].point, 'second')

			storageApi.setItem('tasks', JSON.stringify(tasks))
			window.dispatchEvent(new Event('tasks'))
		}
	}

	const unPauseTask = (id: number) => {
		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')
		const taskIndex = tasks.findIndex(t => t.id === id)

		if (taskIndex !== -1 && tasks[taskIndex].status === TaskStatus.Paused) {
			tasks[taskIndex].point = dayjs().toISOString()
			tasks[taskIndex].status = TaskStatus.Running

			storageApi.setItem('tasks', JSON.stringify(tasks))
			window.dispatchEvent(new Event('tasks'))
		}
	}

	const completeTask = (id: number) => {
		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')
		const taskIndex = tasks.findIndex(t => t.id === id)

		if (taskIndex !== -1) {
			if (tasks[taskIndex].status !== TaskStatus.Paused) {
				tasks[taskIndex].total += dayjs().diff(tasks[taskIndex].point, 'second')
			}
			tasks[taskIndex].status = TaskStatus.Completed
			tasks[taskIndex].completedTime = dayjs().toISOString()

			storageApi.setItem('tasks', JSON.stringify(tasks))
			window.dispatchEvent(new Event('tasks'))
		}
	}

	const removeTask = (id: number) => {
		// Удаление задачи из tasks
		const tasks: Task[] = JSON.parse(storageApi.getItem('tasks') || '[]')
		const newTasks = tasks.filter(t => t.id !== id)
		storageApi.setItem('tasks', JSON.stringify(newTasks))
		window.dispatchEvent(new Event('tasks'))

		// Удаление задачи из taskQueue
		const taskQueue: Task[] = JSON.parse(
			storageApi.getItem('taskQueue') || '[]'
		)
		const newTaskQueue = taskQueue.filter(t => t.id !== id)
		storageApi.setItem('taskQueue', JSON.stringify(newTaskQueue))
		window.dispatchEvent(new Event('taskQueue'))
	}

	const getTasks = () => {
		return JSON.parse(storageApi.getItem('tasks') || '[]') as Task[]
	}

	const getTaskQueue = () => {
		return JSON.parse(storageApi.getItem('taskQueue') || '[]') as Task[]
	}

	return {
		storageApi,
		addNewTask,
		changeTaskStatus,
		removeTask,
		getTasks,
		getTaskQueue,
		runTask,
		pauseTask,
		unPauseTask,
		completeTask
	}
}
