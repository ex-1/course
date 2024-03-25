export const formPlaceholders: Record<
	string,
	{ title: string; placeholder: string[]; tooltip?: string }
> = {
	label: {
		title: 'Название задачи',
		placeholder: ['Написать отчет о успеваемости сотрудников']
	},

	description: {
		title: 'Краткое описание задачи',
		placeholder: [
			'Составить документ-отчет об успеваемости сотрудников отдела продаж в excel'
		]
	},

	deadlines: {
		title: 'Сроки выполнения задачи',
		placeholder: ['Начало выполнения', 'Конец выполнения'],
		tooltip: 'Предварительная оценка времени на выполнение задачи'
	}
}

export const dateFromat = 'DD.MM.YY HH:mm'

export const modalTitle = 'Создание новой задачи'
