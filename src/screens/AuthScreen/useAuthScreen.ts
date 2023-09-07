import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import { useAuth } from 'src/contexts/AuthProvider'
import { checkRememberMe } from 'src/api/checkRememberMe'
import { useNavigate } from 'src/hooks/useNavigate'
import { defaultFormValue } from 'src/screens/AuthScreen/constants'
import { FormValueT } from 'src/screens/AuthScreen/types'
import { Endpoints, Screens } from 'src/enums'
import { BASE_URL } from 'src/constants'

export const useAuthScreen = () => {
  const [formValue, setFormValue] = useState<FormValueT>(defaultFormValue)

  const { toScreen } = useNavigate()
  const { setUserData } = useAuth()

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post(BASE_URL + Endpoints.LOGIN, formValue)

      if (response.status === 200) {
        const studentInfo = response.data

        if (formValue.remember) {
          await AsyncStorage.setItem('authToken', studentInfo.token)
        }
        setUserData(studentInfo)

        toScreen(Screens.HOME)
      }
    } catch (error) {
      setFormValue(defaultFormValue)
      console.error('Помилка при авторизації', error)
    }
  }

  useEffect(() => {
    const initializeApp = async (): Promise<void> => {
      const studentInfo = await checkRememberMe()

      if (studentInfo) {
        setUserData(studentInfo)
        toScreen(Screens.HOME)
      }
    }

    initializeApp()
  }, [])

  return {
    handleLogin,
    formValue,
    setFormValue,
  }
}
