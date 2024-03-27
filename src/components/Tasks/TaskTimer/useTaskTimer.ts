import { dateFromat } from '@/config/placeholders'
import { TaskStatus, TaskTimerProps } from '@/config/types'
import { formatTime } from '@/utils/formatTime'
import { useLocalStorage } from '@/utils/useLocalStorage'
import dayjs from 'dayjs'
import { useEffect, useLayoutEffect, useState } from 'react'

export const useTaskTimer = (data: TaskTimerProps) => {
	const { changeTaskStatus } = useLocalStorage()

	const nowTime = dayjs()
	const startTime = dayjs(data.startTime)
	const endTime = data.endTime ? dayjs(data.endTime) : null

	useLayoutEffect(() => {
		if (endTime) {
			if (data.status === TaskStatus.Completed) return
			else if (nowTime.isAfter(endTime) && data.status !== TaskStatus.Expired) {
				changeTaskStatus(data.id, TaskStatus.Expired)
			}
		}
	}, [changeTaskStatus, data.id, data.status, nowTime, endTime])

	const [spentTime, setSpentTime] = useState('Рассчитываем...')
	const [remainTime, setRemainTime] = useState<string | null>(null)
	const [percent, setPercent] = useState<number | null>(null)

	useEffect(() => {
		const calculateTime = () => {
			const spentTime =
				data.status === TaskStatus.Paused ||
				data.status === TaskStatus.Completed
					? data.total
					: data.total + nowTime.diff(data.point, 'second')
			setSpentTime(formatTime(spentTime))

			const remainTime = endTime ? endTime.diff(nowTime, 'second') : null
			if (remainTime !== null) setRemainTime(formatTime(remainTime))

			if (endTime) {
				const p = (nowTime.diff(startTime) / endTime.diff(startTime)) * 100
				setPercent(Math.round(p))
			}
		}

		calculateTime()
	}, [data.point, data.status, data.total, endTime, nowTime, startTime])

	const dates = {
		start: startTime.format(dateFromat),
		end: endTime ? endTime.format(dateFromat) : null
	}

	return { spentTime, remainTime, percent, dates }
}
