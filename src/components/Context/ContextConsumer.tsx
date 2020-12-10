import React from 'react'
import { useContextValue } from './Context'

export const ContextConsumer: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useContextValue()

  return (
    <>
      <button onClick={() => setIsLoggedIn(prev => !prev)}>Login</button>
      {isLoggedIn ? 'U`re logged in successfully' : 'Log in please'}
    </>
  )
}
