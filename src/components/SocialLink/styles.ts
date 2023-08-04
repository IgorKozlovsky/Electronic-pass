import { TouchableOpacity } from 'react-native'
import { css, styled } from 'styled-components'

export const StyledSocialLink = styled(TouchableOpacity)(
  ({ theme }) => css`
    background-color: ${theme.colors.highlight};
    border-radius: 50px;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
  `,
)