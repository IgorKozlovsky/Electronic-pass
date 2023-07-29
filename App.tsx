import { useFonts } from 'expo-font'
import { Text } from 'native-base'
// import { useEffect } from 'react'
// import SplashScreen from 'react-native-splash-screen'

import AppProviders from 'src/features/AppProviders'
import Navigation from 'src/features/Navigation'
import { AppWrapper } from 'src/styles'

const App = (): JSX.Element => {
  // useEffect(SplashScreen.hide, [])

  const [fontsLoaded] = useFonts({
    Urbanist: require('./assets/fonts/Urbanist-VariableFont_wght.ttf'),
  })

  return (
    <AppProviders>
      <AppWrapper>
        {fontsLoaded ? <Navigation /> : <Text>Loading...</Text>}
      </AppWrapper>
    </AppProviders>
  )
}

export default App
