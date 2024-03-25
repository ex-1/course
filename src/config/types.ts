export enum TaskStatus {
	Running = 'running',
	Paused = 'paused',
	Completed = 'completed',
	Expired = 'expired',
	New = 'new'
}

export enum TimeUnits {
	Seconds = 'с.',
	Minutes = 'м.',
	Hours = 'ч.',
	Days = 'д.'
}

export interface Task {
	id: number

	label: string
	description: string

	startTime: string
	endTime?: string

	status: TaskStatus

	total: number
	point: null | string
}

export type NewTask = Omit<Task, 'id' | 'status'>

export type TaskTimerProps = Omit<Task, 'label' | 'description'>
