import { FontSizes } from 'src/theme/types'
import { RFValue } from 'react-native-responsive-fontsize'

const fontSizes: FontSizes = {
  xs: `${RFValue(12)}px`,
  sm: `${RFValue(14)}px`,
  md: `${RFValue(16)}px`,
  lg: `${RFValue(22)}px`,
  xl: `${RFValue(30)}px`,
  xxl: `${RFValue(32)}px`,
}

export default fontSizes
