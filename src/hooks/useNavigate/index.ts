import { useNavigation } from '@react-navigation/native'
import { Screens } from 'src/enums'
import { NavigationType } from 'src/types'

export const useNavigate = () => {
  const navigation = useNavigation<NavigationType>()

  const toScreen = (screenName: Screens): void =>
    navigation.navigate(screenName)

  return {
    ...navigation,
    toScreen,
  }
}
