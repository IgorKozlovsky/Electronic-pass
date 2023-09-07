import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyledSafeAreaView } from 'src/styles'
import { StyledHeader } from 'src/screens/HomeScreen/styles'
import { Advert } from 'src/components/Advert'
import { IconButton } from 'src/components/IconButton'
import SocialLinks from 'src/features/SocialLinks'
import UserCard from 'src/features/UserCard'
import { useNavigate } from 'src/hooks/useNavigate'
import { Screens } from 'src/enums'
import { useAuth } from 'src/contexts/AuthProvider'
import { StyledText, TextBody } from 'src/components/Text'
import theme from 'src/theme'

const HomeScreen = (): JSX.Element => {
  const { userData, setUserData } = useAuth()
  const { toScreen } = useNavigate()

  if (!userData) {
    return <StyledText>Загрузка...</StyledText>
  }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken')
      setUserData(null)

      toScreen(Screens.AUTH)
    } catch (error) {
      console.error('Помилка', error)
    }
  }

  return (
    <StyledSafeAreaView>
      <StyledHeader>
        <SocialLinks>
          <IconButton
            icon={
              <TextBody
                style={{
                  color: theme.colors.highlight,
                }}
              >
                Вийти
              </TextBody>
            }
            onPress={handleLogout}
          />
        </SocialLinks>
      </StyledHeader>
      <Advert children="" />
      <UserCard
        fullname={userData.fullname}
        photo={userData.image_data}
        room={userData.room}
        faculty={userData.faculty}
        id={userData.id}
      />
    </StyledSafeAreaView>
  )
}

export default HomeScreen
