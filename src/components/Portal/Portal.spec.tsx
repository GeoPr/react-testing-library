import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { Modal } from './Modal'

describe('portal', () => {
	it('the modal should show children and the close button', () => {
		const closeHandler = jest.fn()
		const { getByText } = render(
			<Modal onClose={closeHandler}>
				<h5>My</h5>
				<strong>Portal</strong>
			</Modal>
		)

		expect(getByText('Portal')).toBeInTheDocument()
		userEvent.click(getByText(/close/i))
		expect(closeHandler).toHaveBeenCalled()
	})
	it('should be unmounted', () => {
		const { getByText, unmount, queryByText } = render(
			<Modal>
				<h5>My</h5>
				<strong>Portal</strong>
			</Modal>
		)

		expect(getByText('My')).toBeInTheDocument()
		unmount()
		expect(queryByText('My')).not.toBeInTheDocument()
	})
})
