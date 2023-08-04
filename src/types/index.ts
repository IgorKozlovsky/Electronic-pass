import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ReactNode, ComponentProps } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
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

export type SimpleLineIconName = ComponentProps<typeof SimpleLineIcons>['name']
