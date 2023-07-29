import { InputTypes } from 'src/enums'

export type StyledInputProps = {
  label?: string
  placeholder?: string
  type?: InputTypes
}

export type InputRendererProps = {
  variant: string
  isRequired: boolean
  placeholder: string
  focusOutlineColor: string
}

export type InputRenderer = (
  props: InputRendererProps,
  show: boolean,
  toggleShow: () => void,
) => JSX.Element
