/* eslint-disable react-hooks/exhaustive-deps */
import { Task } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { useEffect, useLayoutEffect, useState } from 'react'

export const useTaskList = () => {
	const [isModalOpen, setModalOpen] = useState(false)
	const handleOpenModal = () => setModalOpen(prev => !prev)

	const { getTaskQueue } = useLocalStorage()

	const [tasks, setTasks] = useState<Task[]>([])

	useEffect(() => {
		const handleStorageChange = () => {
			const storedTasks = getTaskQueue()
			setTasks(storedTasks)
		}

		window.addEventListener('taskQueue', handleStorageChange)

		return () => {
			window.removeEventListener('taskQueue', handleStorageChange)
		}
	}, [])

	useLayoutEffect(() => {
		const storedTasks = getTaskQueue()
		setTasks(storedTasks)
	}, [])

	return { handleOpenModal, isModalOpen, tasks }
}
