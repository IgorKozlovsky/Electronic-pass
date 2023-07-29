import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ReactNode } from 'react'

import { Screens } from 'src/enums'

export type NativeChildrenProps = {
  children: ReactNode
}

export type StackProviderProps = NativeChildrenProps & {
  initialRouteName: Screens
}

export type RootStackParams = {
  Auth: undefined
  Home: undefined
}

export type NavigationType = Awaited<NativeStackNavigationProp<RootStackParams>>
