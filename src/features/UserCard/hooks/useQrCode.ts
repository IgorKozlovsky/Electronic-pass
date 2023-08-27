import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'src/constants'
import { Endpoints } from 'src/enums'
import { Buffer } from 'buffer'

global.Buffer = Buffer

export const useQrCode = () => {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchQrCode = async (
    id: number,
    abortController: AbortController,
  ): Promise<void> => {
    setLoading(true)
    try {
      const response = await axios.post(
        BASE_URL + Endpoints.GET_QR,
        { student_id: id },
        {
          responseType: 'arraybuffer',
          signal: abortController.signal,
        },
      )
      const base64String = Buffer.from(response.data).toString('base64')
      setQrCode(`data:image/png;base64,${base64String}`)
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
