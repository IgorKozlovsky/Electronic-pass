import { Text } from 'native-base'
import { css, styled } from 'styled-components'

export const StyledText = styled(Text)(
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-family: Urbanist;
  `,
)

export const TextH1 = styled(StyledText)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xxl};
    font-weight: bold;
  `,
)

export const TextH2 = styled(StyledText)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    font-weight: bold;
  `,
)

export const TextH4 = styled(StyledText)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: bold;
  `,
)

export const TextBody = styled(StyledText)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.md};
  `,
)

export const TextBodySemiBold = styled(TextBody)`
  font-weight: 600;
`
