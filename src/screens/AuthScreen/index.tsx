import { Checkbox } from 'native-base'

import { StyledSafeAreaView } from 'src/styles'
import { InputFlex, TextFlex } from 'src/screens/AuthScreen/styles'
import { TextBody, TextH4 } from 'src/components/Text'
import { StyledInput } from 'src/components/Input'
import { InputTypes } from 'src/enums'

const AuthScreen = (): JSX.Element => {
  return (
    <StyledSafeAreaView
      style={{
        gap: 36,
      }}
    >
      <TextFlex>
        <TextH4>Увійти 🔐</TextH4>
        <TextBody>
          Введіть логін і пароль. Якщо ви забули їх, то запитайте у свого
          методиста.
        </TextBody>
      </TextFlex>
      <InputFlex>
        <StyledInput placeholder="Логін" label="Логін" type={InputTypes.TEXT} />
        <StyledInput
          placeholder="Пароль"
          label="Пароль"
          type={InputTypes.PASSWORD}
        />
        <Checkbox value="remember">Запам'ятай мене</Checkbox>
      </InputFlex>
    </StyledSafeAreaView>
  )
}

export default AuthScreen
