import { View } from 'native-base'
import { styled, css } from 'styled-components'

export const StyledFrontCard = styled(View)(
  ({ theme }) => css`
    aspect-ratio: 0.9;
    width: 100%;
    justify-content: space-between;
    background-color: white;
    elevation: 12;
    padding: ${theme.spaces.lg} ${theme.spaces.xl};
  `,
)

export const StyledProfileInner = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`

export const StyledBackCard = styled(View)`
  aspect-ratio: 1;
  width: 100%;
  background-color: white;
`
