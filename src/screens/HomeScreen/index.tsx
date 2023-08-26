import { Text } from 'native-base'
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

const HomeScreen = (): JSX.Element => {
  const { userData, setUserData } = useAuth()

  if (!userData) {
    return <Text>Загрузка...</Text>
  }

  const { toScreen } = useNavigate()

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
        <IconButton
          icon={<Text color="#1C83BD">Вийти</Text>}
          onPress={handleLogout}
        />
        <SocialLinks />
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
