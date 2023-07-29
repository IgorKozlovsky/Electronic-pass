import { StyledSafeAreaView } from 'src/styles'
import { TextFlex } from 'src/screens/AuthScreen/styles'
import { TextBody, TextH2 } from 'src/components/Text'

const AuthScreen = (): JSX.Element => {
  return (
    <StyledSafeAreaView>
      <TextFlex>
        <TextH2>Увійти 🔐</TextH2>
        <TextBody>
          Введіть логін і пароль. Якщо ви забули їх, то запитайте у свого
          методиста.
        </TextBody>
      </TextFlex>
    </StyledSafeAreaView>
  )
}

export default AuthScreen
