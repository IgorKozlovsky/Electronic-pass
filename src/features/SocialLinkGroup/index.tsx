import { SimpleLineIcons } from '@expo/vector-icons'
import { SocialLink } from 'src/components/SocialLink'
import TelegramIcon from 'src/components/SocialLink/TelegramCustomIcon'
import { StyledLinksWrapper } from 'src/features/SocialLinkGroup/styles'
import {
  simpleIconsLinks,
  telegramLink,
} from 'src/features/SocialLinkGroup/constants'

const SocialLinkGroup = () => (
  <StyledLinksWrapper>
    <SocialLink
      url={telegramLink}
      icon={<TelegramIcon color="white" width={24} height={24} />}
    />
    {simpleIconsLinks.map(({ url, name }) => (
      <SocialLink
        key={url}
        url={url}
        icon={<SimpleLineIcons color="white" name={name} size={24} />}
      />
    ))}
  </StyledLinksWrapper>
)

export default SocialLinkGroup
