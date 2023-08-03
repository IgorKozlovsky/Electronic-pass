import { View } from 'native-base'
import { css, styled } from 'styled-components'
import { AdvertWrapperProps } from 'src/components/Advert/types'

export const AdvertWrapper = styled(View)<AdvertWrapperProps>(
  ({ isHidden }) => css`
    align-items: center;
    width: 100%;
    max-height: 100px;
    height: ${isHidden ? '100px' : 'auto'};
    visibility: ${isHidden ? 'hidden' : 'visible'};
  `,
)
