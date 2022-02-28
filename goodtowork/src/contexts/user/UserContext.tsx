import { createContext } from 'react'
import { UserModel } from '../../models/context/user/UserModel'

type UserContextProviderInput = {
  children: React.ReactNode
}

export const UserContext = createContext<UserModel | null>(null)

export const UserContextProvider = ({ children } : UserContextProviderInput) => {
  return <UserContext.Provider value={ { token: '_token_', userId: '00000000-0000-0000-0000-000000000003' } }>
    {children}
  </UserContext.Provider>
}