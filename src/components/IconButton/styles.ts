import { Button } from 'native-base'
import { styled, css } from 'styled-components'

export const StyledIconButton = styled(Button)(
  ({ theme }) => css`
    background-color: transparent;
    padding: ${theme.spaces.sm};
  `,
)
