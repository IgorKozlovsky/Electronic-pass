import { Box } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { css, styled } from 'styled-components'

export const StyledSafeAreaView = styled(SafeAreaView)`
  height: 100%;
`

export const AppWrapper = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;
  `,
)
