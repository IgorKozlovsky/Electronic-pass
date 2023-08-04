import { useNavigation } from '@react-navigation/native'
import { Screens } from 'src/enums'
import { NavigationType } from 'src/types'
import { NavigateType } from 'src/hooks/useNavigate/types'

export const useNavigate = (): NavigateType => {
  const navigation = useNavigation<NavigationType>()

  const toScreen = (screenName: Screens) => {
    navigation.navigate(screenName)
  }

  return {
    ...navigation,
    toScreen,
  }
}
