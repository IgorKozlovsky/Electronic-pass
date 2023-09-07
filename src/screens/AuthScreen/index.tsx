import { Button, Checkbox } from 'native-base'

import { StyledSafeAreaView } from 'src/styles'
import {
  StyledAuthScreen,
  InputFlex,
  TextFlex,
} from 'src/screens/AuthScreen/styles'
import { TextBody, TextH4, TextSmallBody } from 'src/components/Text'
import { StyledInput } from 'src/components/Input'
import { InputTypes } from 'src/enums'
import theme from 'src/theme'
import { useAuthScreen } from 'src/screens/AuthScreen/useAuthScreen'

const AuthScreen = (): JSX.Element => {
  const { handleLogin, formValue, setFormValue } = useAuthScreen()

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
            value={formValue.login}
            onChange={text => setFormValue({ ...formValue, login: text })}
          />
          <StyledInput
            placeholder="Пароль"
            label="Пароль"
            type={InputTypes.PASSWORD}
            value={formValue.password}
            onChange={text => setFormValue({ ...formValue, password: text })}
          />
          <Checkbox
            size="sm"
            onChange={() =>
              setFormValue(prev => ({
                ...prev,
                remember: !prev.remember,
              }))
            }
            value="remember"
          >
            <TextSmallBody> Запам'ятай мене</TextSmallBody>
          </Checkbox>
        </InputFlex>
      </StyledAuthScreen>
      <Button
        mb={theme.spaces.lg}
        spinnerPlacement="end"
        isLoadingText="Надсилається"
        onPress={handleLogin}
      >
        Надіслати
      </Button>
    </StyledSafeAreaView>
  )
}

export default AuthScreen
