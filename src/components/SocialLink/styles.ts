import { Link } from 'native-base'
import { css, styled } from 'styled-components'

export const StyledSocialLink = styled(Link)(
  ({ theme }) => css`
    background-color: ${theme.colors.highlight};
    border-radius: 50px;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
  `,
)
