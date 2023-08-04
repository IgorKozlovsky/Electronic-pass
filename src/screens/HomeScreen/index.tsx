import { useNavigation } from '@react-navigation/native'
import { Button, View } from 'native-base'
import { StyledSafeAreaView } from 'src/styles'
import { Ionicons } from '@expo/vector-icons'
import { Advert } from 'src/components/Advert'
import { IconButton } from 'src/components/IconButton'
import { Screens } from 'src/enums'
import { NavigationType } from 'src/types'
import SocialLinks from 'src/features/SocialLinkGroup'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationType>()

  return (
    <StyledSafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} />}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <SocialLinks />
      </View>
      <Advert children="" />
    </StyledSafeAreaView>
  )
}

export default HomeScreen
