import { useState } from 'react'
import { Animated } from 'react-native'
import { RotateT } from 'src/features/UserCard/types'

export const useUserCard = () => {
  const [flipped, setFlipped] = useState<boolean>(false)
  const [flipValue] = useState<Animated.Value>(new Animated.Value(0))

  const toggleFlip = (): void => {
    setFlipped(!flipped)

    Animated.spring(flipValue, {
      toValue: flipped ? 0 : 1,
      friction: 5,
      tension: 5,
      useNativeDriver: true,
    }).start()
  }

  const rotate = (isBackwards: boolean): RotateT => [
    {
      rotateY: flipValue.interpolate({
        inputRange: [0, 1],
        outputRange: [
          isBackwards ? '180deg' : '0deg',
          isBackwards ? '0deg' : '180deg',
        ],
      }),
    },
  ]

  return {
    toggleFlip,
    rotate,
  }
}
