import { Input } from 'native-base'
import { css, styled } from 'styled-components'

export const InputBase = styled(Input)(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.md};
  `,
)
