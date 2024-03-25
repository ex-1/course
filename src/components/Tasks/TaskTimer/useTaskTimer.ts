/* eslint-disable react-hooks/exhaustive-deps */
import { TaskStatus, TaskTimerProps, TimeUnits } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

interface TimerTime {
	percent: number
	remain: {
		unit: TimeUnits
		value: number
	}
	spent: {
		unit: TimeUnits
		value: number
	}
}

export const useTaskTimer = (data: TaskTimerProps) => {
	const { changeTaskStatus } = useLocalStorage()

	const [time, setTime] = useState<TimerTime>({
		percent: 0,
		remain: { unit: TimeUnits.Seconds, value: 0 },
		spent: { unit: TimeUnits.Seconds, value: 0 }
	})

	const [tooltipMessage, setTooltipMessage] = useState('Loading...')

	const endTime = data.endTime ? dayjs(data.endTime) : null
	const startTime = dayjs(data.startTime)

	useEffect(() => {
		if (data.status === TaskStatus.Running) {
			if (endTime) {
				setTooltipMessage(
					`${startTime.format('DD.MM.YY HH:mm')} - ${endTime.format(
						'DD.MM.YY HH:mm'
					)}`
				)
			} else {
				setTooltipMessage(`${startTime.format('DD.MM.YY HH:mm')} - ?`)
			}
		}
	}, [data.status, endTime, startTime])

	useEffect(() => {
		const calculateTime = () => {
			const now = dayjs()

			const spendTime =
				data.status === TaskStatus.Paused
					? data.total
					: data.total + now.diff(data.point, 'second')

			let remainTime: number | null = 0
			let percent = 0

			if (endTime) {
				remainTime = endTime.diff(now, 'second')
				// 86400 - seconds in 1 day
				percent = ((86400 - remainTime) / 86400) * 100
			} else {
				remainTime = null
				percent = 100
			}

			let spent = { unit: TimeUnits.Seconds, value: 0 }

			if (spendTime >= 86400) {
				const days = Math.floor(spendTime / 86400)
				spent = { unit: TimeUnits.Days, value: days }
			} else if (spendTime >= 3600) {
				const hours = Math.floor(spendTime / 3600)
				spent = { unit: TimeUnits.Hours, value: hours }
			} else if (spendTime >= 60) {
				const minutes = Math.floor(spendTime / 60)
				spent = { unit: TimeUnits.Minutes, value: minutes }
			} else {
				spent = { unit: TimeUnits.Seconds, value: spendTime }
			}

			let remain = { unit: TimeUnits.Seconds, value: 0 }

			if (spendTime >= 86400) {
				const days = Math.floor(spendTime / 86400)
				remain = { unit: TimeUnits.Days, value: days }
			} else if (spendTime >= 3600) {
				const hours = Math.floor(spendTime / 3600)
				remain = { unit: TimeUnits.Hours, value: hours }
			} else if (spendTime >= 60) {
				const minutes = Math.floor(spendTime / 60)
				remain = { unit: TimeUnits.Minutes, value: minutes }
			} else {
				remain = { unit: TimeUnits.Seconds, value: spendTime }
			}

			setTime({ percent, remain, spent })
		}

		if (data.status === TaskStatus.Running) {
			const timerInterval = setInterval(calculateTime, 1000)
			return () => clearInterval(timerInterval)
		} else {
			calculateTime()
		}
	}, [data.status, endTime, startTime])

	return { time, tooltipMessage }
}
