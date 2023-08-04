import { View } from 'native-base'
import { css, styled } from 'styled-components'

export const StyledLinksWrapper = styled(View)(
  ({ theme }) => css`
    gap: 10px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-right: ${theme.spaces.xxl};
  `,
)
