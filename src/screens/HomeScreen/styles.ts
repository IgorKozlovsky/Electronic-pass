import { View } from 'native-base'
import { css, styled } from 'styled-components'

export const StyledHeader = styled(View)(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spaces.lg};
    margin-bottom: ${theme.spaces.lg};
  `,
)
