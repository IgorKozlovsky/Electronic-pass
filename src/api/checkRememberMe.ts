import { isExpired, decodeToken } from 'react-jwt'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { BASE_URL } from 'src/constants'
import { DecodeToken } from 'src/api/types'

export const checkRememberMe = async () => {
  const token = await AsyncStorage.getItem('authToken')

  if (!token) return false

  const myDecodedToken = decodeToken(token) as DecodeToken
  const isMyTokenExpired = isExpired(token)

  if (isMyTokenExpired) {
    return false
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/student/${myDecodedToken.student_id}`,
    )

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error('Помилка при перевірці токена', error)
  }
}
