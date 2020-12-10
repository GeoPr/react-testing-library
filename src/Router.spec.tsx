import React, { FC } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { NavBar } from './components/Navbar/Navbar'
import { Routes } from './components/Routes'

const renderWithRouter = (Component: any, route: string = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] })

  const Wrapper: FC = ({ children }) => (
    <Router history={history}>{children}</Router>
  )

  return {
    ...render(Component, { wrapper: Wrapper }),
    history,
  }
}

const Layout: FC = () => (
  <>
    <NavBar />
    <Routes />
  </>
)

describe('router', () => {
  it('should render the home page', () => {
    // const history = createMemoryHistory()
    // const { getByText } = render(
    // 	<Router history={history}>
    // 		<NavBar />
    // 		<Routes />
    // 	</Router>
    // )
    const { getByText } = renderWithRouter(<Layout />)

    expect(getByText(/home page/i)).toBeInTheDocument()
  })

  it('should navigate to the about page', () => {
    const { getByText, getByTestId } = renderWithRouter(<Layout />)

    userEvent.click(getByTestId('About'))
    expect(getByText(/about page/i)).toBeInTheDocument()
  })

  it('should navigate to a contact page', () => {
    const { getByText, getByTestId } = renderWithRouter(<Layout />)

    userEvent.click(getByTestId('Contact'))
    expect(getByText(/hello/i)).toBeInTheDocument()
  })

  it('should navigate to the 404 page', () => {
    const { getByText } = renderWithRouter(<Layout />, '/asd')

    expect(getByText(/error/i)).toBeInTheDocument()
  })
})
