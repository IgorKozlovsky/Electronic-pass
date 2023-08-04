import { StyledSocialLink } from 'src/components/SocialLink/styles'
import { SocialLinkProps } from 'src/components/SocialLink/types'

export const SocialLink = ({ icon, url }: SocialLinkProps) => (
  <StyledSocialLink href={url}>{icon}</StyledSocialLink>
)
