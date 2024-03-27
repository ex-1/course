export enum TaskStatus {
	Running = 'running',
	Paused = 'paused',
	Completed = 'completed',
	Expired = 'expired',
	New = 'new'
}

export enum TimeUnits {
	Seconds = 'сек.',
	Minutes = 'мин.',
	Hours = 'час.',
	Days = 'дн.',
	Months = 'месяц.'
}

export interface Task {
	id: number

	label: string
	description: string

	startTime: string
	endTime?: string
	completedTime?: string

	status: TaskStatus

	total: number
	point: null | string
}

export type NewTask = Omit<Task, 'id' | 'status'>

export type TaskTimerProps = Omit<Task, 'label' | 'description'>
