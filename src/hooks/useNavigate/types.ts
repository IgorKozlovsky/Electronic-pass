import { NavigationType } from 'src/types'
import { Screens } from 'src/enums'

export type NavigateType = NavigationType & {
  toScreen: (screenName: Screens) => void
}
