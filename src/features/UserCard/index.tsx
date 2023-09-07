import { Image, View } from 'native-base'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { TextBodySemiBold, TextH4, TextSmallBody } from 'src/components/Text'
import { useUserCard } from 'src/features/UserCard/hooks/useUserCard'
import {
  StyledFrontCard,
  StyledBackCard,
  StyledProfileInner,
  StyledAnimationContainer,
  StyledImage,
} from 'src/features/UserCard/styles'
import { BASE64_PREFIX } from 'src/constants'
import { AnimationType } from 'src/enums'
import { UserCardProps } from 'src/features/UserCard/types'

const UserCard = ({
  faculty,
  room,
  fullname,
  photo,
  id,
}: UserCardProps): JSX.Element => {
  const { toggleFlip, rotateAnimation, qrCode, loading } = useUserCard(id)

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
              <StyledImage
                style={{ width: '50%', height: '100%' }}
                alt="profile image"
                source={{ uri: BASE64_PREFIX + photo }}
              />
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
            {loading ? (
              <ActivityIndicator
                size="large"
                style={{
                  top: '50%',
                  transform: [{ translateY: -20 }],
                }}
              />
            ) : (
              <Image
                alt="qr"
                style={{ width: '100%', height: '100%' }}
                source={qrCode ? { uri: qrCode } : undefined}
              />
            )}
          </StyledBackCard>
        </StyledAnimationContainer>
      </TouchableOpacity>
    </View>
  )
}

export default UserCard
