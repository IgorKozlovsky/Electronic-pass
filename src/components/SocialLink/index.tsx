import { Linking } from 'react-native'
import { StyledSocialLink } from 'src/components/SocialLink/styles'
import { SocialLinkProps } from 'src/components/SocialLink/types'

export const SocialLink = ({ icon, url }: SocialLinkProps) => (
  <StyledSocialLink onPress={() => Linking.openURL(url)}>
    {icon}
  </StyledSocialLink>
)
