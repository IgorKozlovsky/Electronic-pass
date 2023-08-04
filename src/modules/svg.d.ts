declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'

  type SvgComponent = (props: SvgProps) => JSX.Element

  const content: SvgComponent

  export default content
}
