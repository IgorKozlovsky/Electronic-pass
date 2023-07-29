import { Icon, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { InputTypes } from 'src/enums'
import { InputRenderer } from 'src/components/Input/types'
import { InputBase } from 'src/components/Input/styles'
import theme from 'src/theme'

export const InputRenderers: Record<InputTypes, InputRenderer> = {
  [InputTypes.TEXT]: props => <InputBase {...props} />,
  [InputTypes.PASSWORD]: (props, show, toggleShow) => (
    <InputBase
      {...props}
      type={show ? InputTypes.TEXT : InputTypes.PASSWORD}
      InputRightElement={
        <Pressable onPress={toggleShow}>
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={6}
            mr="2"
            color={theme.colors.highlight}
          />
        </Pressable>
      }
    />
  ),
}
