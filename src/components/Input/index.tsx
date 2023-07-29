import { FormControl } from 'native-base'

import { StyledInputProps } from 'src/components/Input/types'
import { InputTypes } from 'src/enums'
import theme from 'src/theme'
import { TextSmallBody } from 'src/components/Text'
import { InputRenderers } from 'src/components/Input/constants'
import { usePassword } from 'src/components/Input/usePassword'

export const StyledInput = ({
  placeholder = '',
  label,
  type = InputTypes.TEXT,
}: StyledInputProps): JSX.Element => {
  const { show, toggleShow } = usePassword()

  const inputProps = {
    variant: 'underlined',
    isRequired: true,
    placeholder,
    focusOutlineColor: theme.colors.highlight,
  }

  const renderInput = InputRenderers[type]

  return (
    <FormControl
      style={{
        gap: 16,
      }}
    >
      <TextSmallBody fontWeight="bold">{label}</TextSmallBody>
      {renderInput(inputProps, show, toggleShow)}
    </FormControl>
  )
}
