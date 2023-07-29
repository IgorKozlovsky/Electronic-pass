import { NativeBaseProvider, extendTheme } from 'native-base'
import { ThemeProvider } from 'styled-components/native'

import theme from 'src/theme'
import { NativeChildrenProps } from 'src/types'

const extendedTheme = extendTheme(theme)

const AppProviders = (props: NativeChildrenProps): JSX.Element => (
  <NativeBaseProvider theme={extendedTheme}>
    <ThemeProvider theme={theme} {...props} />
  </NativeBaseProvider>
)

export default AppProviders
