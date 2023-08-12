import { Image, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { TextBodySemiBold, TextSmallestBody } from 'src/components/Text'
import { useUserCard } from 'src/features/UserCard/useUserCard'
import {
  StyledFrontCard,
  StyledBackCard,
  StyledProfileInner,
  StyledAnimationContainer,
} from 'src/features/UserCard/styles'
import { UserCardProps } from 'src/features/UserCard/types'

const UserCard = ({
  faculty,
  room,
  fullname,
  photo,
  qrCode,
}: UserCardProps): JSX.Element => {
  const { toggleFlip, rotate } = useUserCard()

  return (
    <View style={{ width: 350, height: 500 }}>
      <TouchableOpacity
        style={{ height: '100%', width: '100%', position: 'relative' }}
        onPress={toggleFlip}
        activeOpacity={1}
      >
        <StyledAnimationContainer
          style={{
            transform: rotate(false),
          }}
        >
          <StyledFrontCard>
            <TextBodySemiBold>Перепустка в гуртожиток</TextBodySemiBold>
            <StyledProfileInner>
              <Image
                style={{ flexShrink: 1, flexBasis: '90%' }}
                alt="profile image"
                source={photo}
              />
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexShrink: 1,
                }}
              >
                <TextSmallestBody>{faculty}</TextSmallestBody>
                <View>
                  <TextSmallestBody>Кімната:</TextSmallestBody>
                  <TextSmallestBody>{room}</TextSmallestBody>
                </View>
              </View>
            </StyledProfileInner>
            <TextBodySemiBold>{fullname}</TextBodySemiBold>
          </StyledFrontCard>
        </StyledAnimationContainer>
        <StyledAnimationContainer
          style={{
            transform: rotate(true),
          }}
        >
          <StyledBackCard>
            <Image
              alt="qr"
              style={{ width: '100%', height: '100%' }}
              source={qrCode}
            />
          </StyledBackCard>
        </StyledAnimationContainer>
      </TouchableOpacity>
    </View>
  )
}

export default UserCard
