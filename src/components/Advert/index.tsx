import { NativeChildrenProps } from 'src/types'
import { AdvertWrapper } from 'src/components/Advert/styles'

export const Advert = ({ children }: NativeChildrenProps): JSX.Element => (
  <AdvertWrapper isHidden={!children}>{children}</AdvertWrapper>
)
