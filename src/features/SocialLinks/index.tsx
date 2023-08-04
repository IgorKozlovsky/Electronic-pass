import { SimpleLineIcons } from '@expo/vector-icons'
import { SocialLink } from 'src/components/SocialLink'
import TelegramIcon from 'src/components/TelegramCustomIcon'
import { StyledLinksWrapper } from 'src/features/SocialLinks/styles'
import { socialLinks, TELEGRAM_LINK } from 'src/features/SocialLinks/constants'

const SocialLinks = () => (
  <StyledLinksWrapper>
    <SocialLink
      url={TELEGRAM_LINK}
      icon={<TelegramIcon color="white" width={24} height={24} />}
    />
    {socialLinks.map(({ url, name }) => (
      <SocialLink
        key={url}
        url={url}
        icon={<SimpleLineIcons color="white" name={name} size={24} />}
      />
    ))}
  </StyledLinksWrapper>
)

export default SocialLinks
