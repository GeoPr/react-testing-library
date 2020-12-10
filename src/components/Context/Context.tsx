import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

interface IContextValue {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const Context = createContext({} as IContextValue)

export const ContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value: IContextValue = { isLoggedIn, setIsLoggedIn }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextValue = () => useContext(Context)
