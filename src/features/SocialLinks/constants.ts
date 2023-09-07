import { SocialLinks } from 'src/features/SocialLinks/types'
import { SocialLinkNames } from 'src/enums'
import { FontAwesome5 } from '@expo/vector-icons'

export const socialLinks: SocialLinks[] = [
  {
    name: SocialLinkNames.TELEGRAM,
    url: 'https://t.me/studsovet_nuoua1',
    IconPack: FontAwesome5,
  },
  {
    name: SocialLinkNames.TIKTOK,
    url: 'https://www.tiktok.com/@studrada_nuoua?_t=8erotAFaCV4&_r=1',
    IconPack: FontAwesome5,
  },
  {
    name: SocialLinkNames.FACEBOOK,
    url: 'https://www.facebook.com/studrada.nuoua',
    IconPack: FontAwesome5,
  },
  {
    name: SocialLinkNames.INSTAGRAM,
    url: 'https://instagram.com/studrada_nuoua?igshid=MzRlODBiNWFlZA==',
    IconPack: FontAwesome5,
  },
  {
    name: SocialLinkNames.SHOP,
    url: 'https://instagram.com/studshop_nuoua?igshid=MzRlODBiNWFlZA==',
    IconPack: FontAwesome5,
  },
]
