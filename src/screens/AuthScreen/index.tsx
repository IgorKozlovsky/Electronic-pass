import { Button, Checkbox, Flex } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { StyledSafeAreaView } from 'src/styles'
import { InputFlex, TextFlex } from 'src/screens/AuthScreen/styles'
import { TextBody, TextH4 } from 'src/components/Text'
import { StyledInput } from 'src/components/Input'
import { InputTypes, Screens } from 'src/enums'
import theme from 'src/theme'
import { NavigationType } from 'src/types'

const AuthScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationType>()

  return (
    <StyledSafeAreaView
      style={{
        justifyContent: 'space-between',
      }}
    >
      <Flex
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
          <Checkbox value="remember">Запам'ятай мене</Checkbox>
        </InputFlex>
      </Flex>
      <Button
        mb={theme.spaces.lg}
        spinnerPlacement="end"
        isLoadingText="Надсилається"
        onPress={() => navigation.navigate(Screens.HOME)}
      >
        Надіслати
      </Button>
    </StyledSafeAreaView>
  )
}

export default AuthScreen
