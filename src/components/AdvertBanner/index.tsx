import { ReactNode } from 'react'
import { AdvertWrapper } from 'src/components/AdvertBanner/styles'

export const AdvertBanner = ({
  children,
}: {
  children?: ReactNode
}): JSX.Element => (
  <AdvertWrapper isHidden={!children}>{children}</AdvertWrapper>
)
