import { Ionicons } from '@expo/vector-icons'
import { StyledSafeAreaView } from 'src/styles'
import { StyledHeader } from 'src/screens/HomeScreen/styles'
import { Advert } from 'src/components/Advert'
import { IconButton } from 'src/components/IconButton'
import SocialLinks from 'src/features/SocialLinks'
import { useNavigate } from 'src/hooks/useNavigate'
import { Screens } from 'src/enums'

const HomeScreen = (): JSX.Element => {
  const { toScreen } = useNavigate()

  return (
    <StyledSafeAreaView>
      <StyledHeader>
        <IconButton
          icon={<Ionicons name="arrow-back" size={26} />}
          onPress={() => {
            toScreen(Screens.AUTH)
          }}
        />
        <SocialLinks />
      </StyledHeader>
      <Advert children="" />
    </StyledSafeAreaView>
  )
}

export default HomeScreen
