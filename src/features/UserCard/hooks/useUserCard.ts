import { useState } from 'react'
import { Animated } from 'react-native'
import { useQrCode } from 'src/features/UserCard/hooks/useQrCode'
import { DEFAULT_ANIMATION_VALUE } from 'src/features/UserCard/constants'
import { AnimationType } from 'src/enums'
import { RotateT } from 'src/features/UserCard/types'

export const useUserCard = (id: number) => {
  const [flipped, setFlipped] = useState<boolean>(false)
  const [flipValue] = useState<Animated.Value>(new Animated.Value(0))

  const { qrCode, fetchQrCode, loading } = useQrCode()

  const runAnimation = (toValue: number, callback?: () => void) => {
    Animated.spring(flipValue, {
      toValue,
      friction: 5,
      tension: 5,
      useNativeDriver: true,
    }).start(callback)
  }

  let abortController = new AbortController()

  const toggleFlip = (): void => {
    if (!flipped) {
      setFlipped(true)

      runAnimation(1, async () => {
        abortController.abort()
        abortController = new AbortController()
        try {
          await fetchQrCode(id, abortController)
        } catch (error) {
          return
        }

        setTimeout(() => {
          setFlipped(false)
          runAnimation(0)
        }, 15000)
      })
    } else {
      abortController.abort()

      setFlipped(false)
      runAnimation(0)
    }
  }

  const rotateAnimation = (animationType: AnimationType): RotateT[] => [
    {
      rotateY: flipValue.interpolate({
        inputRange: [0, 1],
        outputRange:
          animationType === AnimationType.BACKWARDS
            ? [...DEFAULT_ANIMATION_VALUE].reverse()
            : DEFAULT_ANIMATION_VALUE,
      }),
    },
  ]

  return {
    toggleFlip,
    rotateAnimation,
    qrCode,
    loading,
  }
}
