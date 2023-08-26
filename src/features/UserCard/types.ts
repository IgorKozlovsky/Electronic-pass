import { Animated } from 'react-native'

export type UserCardProps = {
  faculty: string
  room: string
  fullname: string
  photo: string
  id: number
}

export type RotateT = {
  rotateY: Animated.AnimatedInterpolation<string | number>
}
