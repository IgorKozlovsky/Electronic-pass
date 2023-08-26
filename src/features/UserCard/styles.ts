import { View, Image } from 'native-base'
import { Animated } from 'react-native'
import { styled, css } from 'styled-components'

export const StyledFrontCard = styled(View)(
  ({ theme }) => css`
    aspect-ratio: 1;
    width: 100%;
    justify-content: space-between;
    background-color: white;
    elevation: 12;
    padding: ${theme.spaces.lg};
    backface-visibility: hidden;
  `,
)

export const StyledProfileInner = styled(View)`
  height: 60%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const StyledBackCard = styled(View)(
  ({ theme }) => css`
    position: absolute;
    aspect-ratio: 1;
    width: 100%;
    background-color: white;
    elevation: 12;
    padding: ${theme.spaces.lg};
    backface-visibility: hidden;
  `,
)

export const StyledAnimationContainer = styled(Animated.View)`
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
`

export const StyledImage = styled(Image)`
  flex-shrink: 0.5;
  object-fit: contain;
`
