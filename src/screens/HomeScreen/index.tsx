import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base'

import { Screens } from 'src/enums'
import { NavigationType } from 'src/types'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationType>()

  return (
    <Button
      spinnerPlacement="end"
      isLoadingText="Надсилається"
      onPress={() => navigation.navigate(Screens.AUTH)}
    >
      Надіслати
    </Button>
  )
}

export default HomeScreen
