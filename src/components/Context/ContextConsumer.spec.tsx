import React from 'react'
import { render } from '@testing-library/react'
import { ContextConsumer } from './ContextConsumer'
import { ContextProvider } from './Context'
import userEvent from '@testing-library/user-event'

describe('context', () => {
  it('ContextConsumer should show default value', () => {
    const { getByText, queryByText, getByRole } = render(
      <ContextProvider>
        <ContextConsumer />
      </ContextProvider>,
    )

		expect(getByText('Log in please')).toBeInTheDocument()
		
		userEvent.click(getByRole('button'))
		
    expect(queryByText('Log in please')).not.toBeInTheDocument()
		expect(getByText(/U`re logged in/i)).toBeInTheDocument()

		userEvent.click(getByRole('button'))

		expect(getByText('Log in please')).toBeInTheDocument()
		expect(queryByText(/U`re logged in/i)).not.toBeInTheDocument()
  })
})
