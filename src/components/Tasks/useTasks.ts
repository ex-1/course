/* eslint-disable react-hooks/exhaustive-deps */
import { Task } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { useEffect, useLayoutEffect, useState } from 'react'

export const useTasks = () => {
	const { getTasks } = useLocalStorage()

	const [tasks, setTasks] = useState<Task[]>([])

	useEffect(() => {
		const handleStorageChange = () => {
			const storedTasks = getTasks()
			setTasks(storedTasks)
		}

		window.addEventListener('tasks', handleStorageChange)

		return () => {
			window.removeEventListener('tasks', handleStorageChange)
		}
	}, [])

	useLayoutEffect(() => {
		const storedTasks = getTasks()
		setTasks(storedTasks)
	}, [])

	return { tasks }
}
