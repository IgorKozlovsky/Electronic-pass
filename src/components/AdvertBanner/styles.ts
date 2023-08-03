import { View } from 'native-base'
import { css, styled } from 'styled-components'

export const AdvertWrapper = styled(View)<{ isHidden: boolean }>(
  ({ isHidden }) => css`
    align-items: center;
    width: 100%;
    max-height: 106px;
    height: ${isHidden ? '106px' : 'auto'};
    visibility: ${isHidden ? 'hidden' : 'visible'};
  `,
)
