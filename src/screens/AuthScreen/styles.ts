import { Flex, FormControl } from 'native-base'
import { css, styled } from 'styled-components'

export const TextFlex = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    gap: ${theme.spaces.lg};
  `,
)

export const InputFlex = styled(FormControl)(
  ({ theme }) => css`
    flex-direction: column;
    gap: ${theme.spaces.lg};
  `,
)

export const StyledAuthScreen = styled(Flex)(
  ({ theme }) => css`
    gap: ${theme.spaces.xxl};
    margin-top: ${theme.spaces.xxl};
  `,
)
