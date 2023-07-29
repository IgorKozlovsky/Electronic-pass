import { useState } from 'react'
import { FormControl, Icon, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { StyledInputProps } from 'src/components/Input/types'
import { InputTypes } from 'src/enums'
import theme from 'src/theme'
import { InputBase } from 'src/components/Input/styles'
import { TextSmallBody } from 'src/components/Text'

export const StyledInput = ({
  placeholder = '',
  label,
  type = InputTypes.TEXT,
}: StyledInputProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <FormControl
      style={{
        gap: 16,
      }}
    >
      <TextSmallBody fontWeight="bold">{label}</TextSmallBody>
      {type === InputTypes.PASSWORD ? (
        <InputBase
          type={show ? InputTypes.TEXT : InputTypes.PASSWORD}
          variant="underlined"
          isRequired
          focusOutlineColor={theme.colors.highlight}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={6}
                mr="2"
                color={theme.colors.highlight}
              />
            </Pressable>
          }
          placeholder={placeholder}
        />
      ) : (
        <InputBase
          variant="underlined"
          isRequired
          placeholder={placeholder}
          focusOutlineColor={theme.colors.highlight}
        />
      )}
    </FormControl>
  )
}
