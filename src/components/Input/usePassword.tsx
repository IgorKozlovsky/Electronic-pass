import { useState } from 'react'

export const usePassword = () => {
  const [show, setShow] = useState<boolean>(false)

  const toggleShow = (): void => setShow(prevShow => !prevShow)

  return {
    show,
    toggleShow,
  }
}
