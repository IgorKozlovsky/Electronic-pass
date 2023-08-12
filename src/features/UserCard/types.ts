import { Animated, ImageSourcePropType } from 'react-native'

export type UserCardProps = {
  faculty: string
  room: number
  fullname: string
  photo: ImageSourcePropType
  qrCode: ImageSourcePropType
}

export type RotateT = {
  rotateY: Animated.AnimatedInterpolation<string | number>
}[]
