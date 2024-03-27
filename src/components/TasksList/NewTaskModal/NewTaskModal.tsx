// -- NewTaskModal --
import { DatePicker, Form, Input, Modal } from 'antd'
import { useNewTaskModal } from './useNewTaskModal'
import {
	dateFromat,
	formPlaceholders as fp,
	modalTitle
} from '@/config/placeholders'
import dayjs from 'dayjs'

interface NewTaskModalProps {
	isModalOpen: boolean
	handleOpenModal(): void
}

export type TFormFields = {
	label: string
	description: string
	deadlines: [dayjs.Dayjs, dayjs.Dayjs | null]
}

export default function NewTaskModal({
	isModalOpen,
	handleOpenModal
}: NewTaskModalProps) {
	const [form] = Form.useForm<TFormFields>()
	const { handleSubmit, onCancel } = useNewTaskModal({ form, handleOpenModal })

	return (
		<Modal
			title={modalTitle}
			open={isModalOpen}
			onOk={form.submit}
			onCancel={onCancel}
		>
			<Form form={form} layout={'vertical'} onFinish={handleSubmit}>
				<Form.Item
					required
					hasFeedback
					name={'label'}
					label={fp.label.title}
					rules={[{ required: true, message: 'Укажите заголовок!' }]}
				>
					<Input maxLength={45} placeholder={fp.label.placeholder[0]} />
				</Form.Item>

				<Form.Item
					required
					hasFeedback
					name={'description'}
					label={fp.description.title}
					rules={[{ required: true, message: 'Опишите задчу!' }]}
				>
					<Input.TextArea
						showCount
						maxLength={400}
						style={{ height: '150px', resize: 'none' }}
						placeholder={fp.description.placeholder[0]}
					/>
				</Form.Item>

				<Form.Item
					required
					hasFeedback
					name={'deadlines'}
					label={fp.deadlines.title}
					rules={[
						{ required: true, message: 'Дата начала обязательное поле!' }
					]}
					tooltip={fp.deadlines.tooltip}
				>
					<DatePicker.RangePicker
						placeholder={fp.deadlines.placeholder as [string, string]}
						showNow
						showTime={{ format: 'HH:mm' }}
						allowEmpty={[false, true]}
						format={dateFromat}
					/>
				</Form.Item>
			</Form>
		</Modal>
	)
}
