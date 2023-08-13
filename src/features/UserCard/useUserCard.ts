import { useState } from 'react'
import { Animated } from 'react-native'
import { DEFAULT_ANIMATION_VALUE } from 'src/features/UserCard/constants'
import { AnimationType } from 'src/enums'
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
  }
}
