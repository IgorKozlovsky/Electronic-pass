import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'src/constants'

export const useQrCode = () => {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchQrCode = async (
    id: number,
    abortController: AbortController,
  ): Promise<void> => {
    setLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}/generate_qr`, id, {
        signal: abortController.signal,
      })
      setQrCode(response.data.qrCode)
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message)
      } else {
        console.error(error)
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    qrCode,
    setQrCode,
    fetchQrCode,
    loading,
  }
}
