import { TimeUnits } from '@/config/types'

export const formatTime = (seconds: number): string => {
	if (seconds < 0) {
		return `0 ${TimeUnits.Seconds}`
	}

	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = seconds % 60

	if (minutes < 60) {
		return `${minutes} ${TimeUnits.Minutes}, ${remainingSeconds} ${TimeUnits.Seconds}`
	}

	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	if (hours < 24) {
		return `${hours} ${TimeUnits.Hours}, ${remainingMinutes} ${TimeUnits.Minutes}`
	}

	const days = Math.floor(hours / 24)
	const remainingHours = hours % 24

	if (days < 30) {
		return `${days} ${TimeUnits.Days}, ${remainingHours} ${TimeUnits.Hours}`
	}

	const months = Math.floor(days / 30)
	const remainingDays = days % 30

	return `${months} ${TimeUnits.Months}, ${remainingDays} ${TimeUnits.Days}`
}
