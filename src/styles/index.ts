import { Box } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { css, styled } from 'styled-components'

export const StyledSafeAreaView = styled(SafeAreaView)(
  ({ theme }) => css`
    height: 100%;
    padding: ${theme.spaces.md} ${theme.spaces.xl} 0 ${theme.spaces.xl};
  `,
)

export const AppWrapper = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;
  `,
)
