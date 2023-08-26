import { createContext, useContext, useState, ReactNode } from 'react'

type UserData = {
  image_data: string
  faculty: string
  fullname: string
  id: number
  login: string
  photo: string
  room: string
  token: string
}

type AuthContextType = {
  userData: UserData | null
  setUserData: (userData: UserData | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData | null>(null)

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
