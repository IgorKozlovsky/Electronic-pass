import { Colors, FontSizes, Spaces } from 'src/theme/types'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    fontSizes: FontSizes
    spaces: Spaces
  }
}
