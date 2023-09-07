import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ReactNode, ComponentProps } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
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

export type IconNames = ComponentProps<typeof FontAwesome5>['name']

export type IconComponents = ComponentProps<typeof FontAwesome5>
