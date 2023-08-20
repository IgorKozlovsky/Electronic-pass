import { Image, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { TextBodySemiBold, TextH4, TextSmallBody } from 'src/components/Text'
import { useUserCard } from 'src/features/UserCard/useUserCard'
import {
  StyledFrontCard,
  StyledBackCard,
  StyledProfileInner,
  StyledAnimationContainer,
  StyledImage,
} from 'src/features/UserCard/styles'
import { AnimationType } from 'src/enums'
import { UserCardProps } from 'src/features/UserCard/types'

const UserCard = ({
  faculty,
  room,
  fullname,
  photo,
  qrCode,
}: UserCardProps): JSX.Element => {
  const { toggleFlip, rotateAnimation } = useUserCard()

  return (
    <View>
      <TouchableOpacity
        style={{ height: '100%', width: '100%', position: 'relative' }}
        onPress={toggleFlip}
        activeOpacity={1}
      >
        <StyledAnimationContainer
          style={{
            transform: rotateAnimation(AnimationType.FORWARDS),
          }}
        >
          <StyledFrontCard>
            <TextH4>Перепустка в гуртожиток</TextH4>
            <StyledProfileInner>
              <StyledImage alt="profile image" source={photo} />
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexShrink: 1,
                }}
              >
                <TextSmallBody>{faculty}</TextSmallBody>
                <View>
                  <TextSmallBody>Кімната:</TextSmallBody>
                  <TextSmallBody>{room}</TextSmallBody>
                </View>
              </View>
            </StyledProfileInner>
            <TextBodySemiBold>{fullname}</TextBodySemiBold>
          </StyledFrontCard>
        </StyledAnimationContainer>
        <StyledAnimationContainer
          style={{
            transform: rotateAnimation(AnimationType.BACKWARDS),
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
