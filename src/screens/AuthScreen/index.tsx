import { Button, Checkbox } from 'native-base'
import { useNavigate } from 'src/hooks/useNavigate'
import { StyledSafeAreaView } from 'src/styles'
import {
  StyledAuthScreen,
  InputFlex,
  TextFlex,
} from 'src/screens/AuthScreen/styles'
import { TextBody, TextH4, TextSmallBody } from 'src/components/Text'
import { StyledInput } from 'src/components/Input'
import { InputTypes, Screens } from 'src/enums'
import theme from 'src/theme'

const AuthScreen = (): JSX.Element => {
  const { toScreen } = useNavigate()

  return (
    <StyledSafeAreaView
      style={{
        justifyContent: 'space-between',
      }}
    >
      <StyledAuthScreen>
        <TextFlex>
          <TextH4>Увійти 🔐</TextH4>
          <TextBody>
            Введіть логін і пароль. Якщо ви забули їх, то запитайте у старости
            гуртожитку.
          </TextBody>
        </TextFlex>
        <InputFlex>
          <StyledInput
            placeholder="Логін"
            label="Логін"
            type={InputTypes.TEXT}
          />
          <StyledInput
            placeholder="Пароль"
            label="Пароль"
            type={InputTypes.PASSWORD}
          />
          <Checkbox size="sm" value="remember">
            <TextSmallBody> Запам'ятай мене</TextSmallBody>
          </Checkbox>
        </InputFlex>
      </StyledAuthScreen>
      <Button
        mb={theme.spaces.lg}
        spinnerPlacement="end"
        isLoadingText="Надсилається"
        onPress={() => toScreen(Screens.HOME)}
      >
        Надіслати
      </Button>
    </StyledSafeAreaView>
  )
}

export default AuthScreen
