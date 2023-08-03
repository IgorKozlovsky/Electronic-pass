import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base'

import { StyledSafeAreaView } from 'src/styles'
import { Advert } from 'src/components/Advert'
import { Screens } from 'src/enums'
import { NavigationType } from 'src/types'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationType>()

  return (
    <StyledSafeAreaView>
      <Button
        spinnerPlacement="end"
        isLoadingText="Надсилається"
        onPress={() => navigation.navigate(Screens.AUTH)}
      >
        Надіслати
      </Button>
      <Advert children="" />
    </StyledSafeAreaView>
  )
}

export default HomeScreen
