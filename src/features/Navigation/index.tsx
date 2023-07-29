import { NavigationContainer } from '@react-navigation/native'

import { Stack } from 'src/contexts'
import { StackProvider } from 'src/contexts/StackProvider'
import { Screens } from 'src/enums'
import AuthScreen from 'src/screens/AuthScreen'
import HomeScreen from 'src/screens/HomeScreen'

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackProvider initialRouteName={Screens.AUTH}>
        <Stack.Screen name={Screens.AUTH} component={AuthScreen} />
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      </StackProvider>
    </NavigationContainer>
  )
}

export default Navigation
