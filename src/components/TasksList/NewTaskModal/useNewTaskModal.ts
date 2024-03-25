import { NewTask } from '@/config/types'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { TFormFields } from './NewTaskModal'
import { FormInstance } from 'antd'

export const useNewTaskModal = ({
	form,
	handleOpenModal
}: {
	form: FormInstance<TFormFields>
	handleOpenModal: () => void
}) => {
	const { addNewTask } = useLocalStorage()

	const handleSubmit = (data: TFormFields) => {
		const startTime = data['deadlines'][0].toISOString()
		const endTime = data['deadlines'][1]?.toISOString()

		const formFieldsData: NewTask = {
			label: data['label'],
			description: data['description'],
			startTime
		}

		endTime && (formFieldsData['endTime'] = endTime)

		addNewTask(formFieldsData)

		form.resetFields()
		handleOpenModal()
	}

	const onCancel = () => {
		form.resetFields()
		handleOpenModal()
	}

	return { handleSubmit, onCancel }
}
