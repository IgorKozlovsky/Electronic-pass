import { SimpleLineIcons } from '@expo/vector-icons'

export type SimpleIconsLinks = {
  name: keyof typeof SimpleLineIcons.glyphMap
  url: string
}[]
