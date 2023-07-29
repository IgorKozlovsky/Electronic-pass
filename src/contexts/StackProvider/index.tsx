import { SCREEN_OPTIONS } from 'src/constants'
import { Stack } from 'src/contexts'
import { StackProviderProps } from 'src/types'

export const StackProvider = (props: StackProviderProps): JSX.Element => {
  return <Stack.Navigator screenOptions={SCREEN_OPTIONS} {...props} />
}
