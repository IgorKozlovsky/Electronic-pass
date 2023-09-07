import { SocialLink } from 'src/components/SocialLink'
import { StyledLinksWrapper } from 'src/features/SocialLinks/styles'
import { socialLinks } from 'src/features/SocialLinks/constants'
import { NativeChildrenProps } from 'src/types'

const SocialLinks = ({ children }: NativeChildrenProps) => (
  <StyledLinksWrapper>
    {children}
    {socialLinks.map(({ url, name, IconPack }) => (
      <SocialLink
        key={url}
        url={url}
        icon={<IconPack color="white" name={name} size={20} />}
      />
    ))}
  </StyledLinksWrapper>
)

export default SocialLinks
