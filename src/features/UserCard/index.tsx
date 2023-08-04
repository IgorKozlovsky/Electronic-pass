import { Image, View } from 'native-base'
import { TextBodySemiBold, TextSmallestBody } from 'src/components/Text'
import {
  StyledFrontCard,
  StyledBackCard,
  StyledProfileInner,
} from 'src/features/UserCard/styles'
import { UserCardProps } from 'src/features/UserCard/types'
import FlipCard from 'react-native-flip-card'

const UserCard = ({ faculty, room, fullname }: UserCardProps): JSX.Element => {
  return (
    <FlipCard
      flipHorizontal={true}
      flipVertical={false}
      friction={8}
      perspective={1000}
    >
      <StyledFrontCard>
        <TextBodySemiBold>Перепустка в гуртожиток</TextBodySemiBold>
        <StyledProfileInner>
          <Image
            style={{ flexShrink: 1, flexBasis: '90%' }}
            alt="qr"
            source={require('src/features/UserCard/profile.png')}
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
      <StyledBackCard>
        <Image
          alt="qr"
          style={{ width: '100%', height: '100%' }}
          source={require('src/features/UserCard/qr.jpg')}
        />
      </StyledBackCard>
    </FlipCard>
  )
}

export default UserCard
