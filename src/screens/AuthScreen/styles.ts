import { Flex } from 'native-base'
import { css, styled } from 'styled-components'

export const TextFlex = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    padding: 0 ${theme.spaces.xl};
    gap: ${theme.spaces.lg};
  `,
)
